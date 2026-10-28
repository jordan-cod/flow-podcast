# Flow Podcast Clone

Clone de estudo do frontend do site do [Flow Podcast](https://flowpodcast.com.br/), feito em 2021 com Vue 2 enquanto eu cursava Sistemas para Internet.

> Projeto pessoal e educacional, sem nenhuma afiliação com o Flow Podcast. Marcas e imagens pertencem aos seus respectivos donos. Não há backend: concursos e produtos da loja são dados estáticos.

**Site no ar:** https://jordan-cod.github.io/flow-podcast/

![Página inicial do clone](docs/preview.jpg)

## Páginas

- Home
- Loja
- Episódios
- Concursos
- Membros
- Flowcoins

## Episódios

Os cards de episódios da Home (9 mais recentes) e da página Episódios (12) vêm do RSS público do canal do Flow Podcast no YouTube (lives e vídeos, sem Shorts). O script `scripts/fetch-episodes.mjs` baixa o feed e grava `src/data/episodios.json`; ele roda antes de todo build (`prebuild`) e o workflow de deploy roda uma vez por dia, então o site se atualiza sozinho. Se o feed falhar, o JSON versionado no repositório é mantido e o build segue normalmente.

```bash
npm run fetch:episodes
```

## Stack

- Vue 2.7
- Vue Router 3 (modo hash)
- Vue CLI 5 (webpack 5)
- ESLint (standard)
- GitHub Pages via GitHub Actions

## Como rodar

Requer Node 18 ou superior (a versão usada no deploy está em `.nvmrc`).

```bash
npm ci
npm run serve
```

Build de produção, gerado em `dist/` e servido em `/flow-podcast/`:

```bash
npm run build
```

Para conferir o build localmente no mesmo subcaminho do GitHub Pages:

```bash
mkdir -p /tmp/pages && cp -R dist /tmp/pages/flow-podcast
npx serve /tmp/pages
```

E abrir http://localhost:3000/flow-podcast/.

## Deploy

Todo push na `main`, a execução diária agendada (09:00 UTC) e o disparo manual rodam o workflow `.github/workflows/pages.yml`, que faz lint, atualiza os episódios, faz o build e publica o `dist/` no GitHub Pages.
