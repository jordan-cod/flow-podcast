import { readFile, writeFile } from 'node:fs/promises'

const CHANNEL_ID = 'UC4ncvgh5hFr5O83MH7-jRJg'
const CHANNEL_SUFFIX = CHANNEL_ID.slice(2)
const FEEDS = [
  `https://www.youtube.com/feeds/videos.xml?playlist_id=UULV${CHANNEL_SUFFIX}`,
  `https://www.youtube.com/feeds/videos.xml?playlist_id=UULF${CHANNEL_SUFFIX}`
]
const FALLBACK_FEED = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
const OUTPUT = new URL('../src/data/episodios.json', import.meta.url)
const LIMIT = 12
const TIMEOUT_MS = 15000

const decode = text => text
  .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
  .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
  .replace(/&quot;/g, '"')
  .replace(/&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&')

const pick = (block, tag) => {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
  return match ? decode(match[1].trim()) : ''
}

const parseFeed = xml => [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
  .map(([, block]) => {
    const videoId = pick(block, 'yt:videoId')
    const published = new Date(pick(block, 'published'))
    return {
      videoId,
      title: pick(block, 'title'),
      published: Number.isNaN(published.getTime()) ? '' : published.toISOString(),
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      url: `https://www.youtube.com/watch?v=${videoId}`
    }
  })
  .filter(item => item.videoId && item.title && item.published)

const fetchFeed = async url => {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    return parseFeed(await response.text())
  } catch (error) {
    console.warn(`[episodios] ${url} failed: ${error.message}`)
    return []
  }
}

const latest = items => {
  const unique = new Map(items.map(item => [item.videoId, item]))
  return [...unique.values()]
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, LIMIT)
}

let episodes = latest((await Promise.all(FEEDS.map(fetchFeed))).flat())
if (episodes.length === 0) episodes = latest(await fetchFeed(FALLBACK_FEED))

if (episodes.length === 0) {
  const current = JSON.parse(await readFile(OUTPUT, 'utf8').catch(() => '[]'))
  console.warn(`[episodios] no episodes fetched, keeping existing file with ${current.length} items`)
  process.exit(0)
}

await writeFile(OUTPUT, JSON.stringify(episodes, null, 2) + '\n')
console.log(`[episodios] wrote ${episodes.length} episodes`)
