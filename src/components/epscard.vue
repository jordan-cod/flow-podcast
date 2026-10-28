<template>
    <article class="ep-card">
        <a :href="episode.url" target="_blank" rel="noopener" class="ep-card-thumb">
            <img :src="episode.thumbnail" :alt="episode.title" loading="lazy" decoding="async" width="480" height="360">
        </a>
        <div class="ep-card-main">
            <h4 :title="episode.title">{{episode.title}}</h4>
        </div>
        <div class="ep-card-links">
            <a :href="episode.url" target="_blank" rel="noopener" class="card-btn"><img src="../assets/home/socials/youtube_2.svg" alt="">Assistir no YouTube</a>
        </div>
        <div class="ep-card-footer">
            <time :datetime="episode.published">{{formattedDate}}</time>
        </div>
    </article>
</template>

<script>
import { formatDate } from '../utils/formatDate'

export default {
  name: 'ep-card',
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate () {
      return formatDate(this.episode.published)
    }
  }
}
</script>

<style>
    .ep-card{
        background: rgb(255, 255, 255);
        border-radius: 5px;
        color: black;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .ep-card-thumb{
        display: block;
        position: relative;
        overflow: hidden;
        aspect-ratio: 16 / 9;
        background: #000;
        border-bottom: 1px solid rgb(214, 213, 213);
    }
    .ep-card-thumb img{
        position: absolute;
        inset: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .ep-card-main{
        margin: 5px 15px;
        text-align: left;
        flex: 1;
    }
    .ep-card-main > h4{
        margin: 15px 0 5px 0;
        font-weight: 700;
        line-height: 1.35;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        overflow: hidden;
        min-height: calc(1.35em * 3);
    }
    .ep-card-links{
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 10px 0;
    }
    .card-btn > img{
        width: 25px;
        border-radius: 100%;
        margin-right: 5px;
    }
    .card-btn{
        font-weight: 500;
        color: black;
        padding: 5px;
        background: var(--color-);
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background .2s linear;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .card-btn:hover{
        background: var(--color-hover);
    }
    .ep-card-footer{
        padding: 10px 15px;
        border-top: 1px solid rgb(214, 213, 213);
        color: #444;
    }
</style>
