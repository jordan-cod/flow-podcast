<template>
<div id="episodios-container">
    <div id="episodios">
        <epscard v-for="episode in episodes" :key="episode.videoId" :episode="episode"/>
    </div>
    <a id="load" href="https://www.youtube.com/@FlowPodcast/streams" target="_blank" rel="noopener">Mais episódios no YouTube</a>
</div>
</template>

<script>
import epscard from '../epscard'
import episodios from '../../data/episodios.json'

export default {
  components: {
    epscard
  },
  data () {
    return {
      episodes: episodios
    }
  }
}
</script>

<style>
    #episodios{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 55px;
        row-gap: 35px;
        margin: 0 3%;
    }
    #episodios-container{
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #load{
        padding: 10px 15px;
        border-radius: 5px;
        border: 1px solid var(--color-hover);
        background: transparent;
        color: var(--color-);
        text-transform: uppercase;
        font-weight: 500;
        margin: 30px 0px;
        cursor: pointer;
        transition-property: background color;
        transition: .2s linear;
    }
    #load:hover{
        background: var(--color-);
        color: var(--main-bg);
    }
    @media (max-width: 1200px){
        #episodios{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 992px){
        #episodios{
            grid-template-columns: 1fr;
        }
    }
</style>
