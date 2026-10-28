<template>
<div>
  <div id="cards">
    <div class="produtos" v-for="produto in produtos" :key="produto.id">
    <div class="produto-border produto">
      <a>
        <div class="card-prod produto-1-img">
            <img :src="produto.img" :alt="produto.name">
            <img :src="produto.imgHover" alt="" class="img-hover">
        </div>
        <div class="descricao-produto">
            <p class="prodname">{{produto.name}}</p>
            <p class="prodpreco">R$ {{formatPrice(produto.preco)}}</p>
        </div>
      </a>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import produtos from '../data/produtos'

export default {
  data () {
    return {
      produtos
    }
  },
  methods: {
    formatPrice (preco) {
      return preco.toFixed(2).replace('.', ',')
    }
  }
}
</script>

<style>
    #cards{
      margin-top: 30px;
      margin-bottom: 70px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 25px;
    }
    .card-prod{
        position: relative;
    }
    .card-prod img{
        display: block;
        width: 100%;
    }
    .card-prod .img-hover{
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity .2s linear;
    }
    .produto:hover .img-hover{
        opacity: 1;
    }
    .descricao-produto{
        padding: 12px 0px;
    }
    .descricao-produto p{
        text-align: center;
        color: #F0F0F0;
    }
    .prodname{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .prodpreco{
        font-size: 2rem;
        font-weight: 700;
    }
    .produto-border{
        border: 1px solid var(--color-) ;
    }
    @media (max-width: 1200px){
        #cards{
            grid-template-columns: 1fr 1fr;
        }
    }
     @media (max-width: 992px){
        #cards{
            grid-template-columns: 1fr;
        }
    }
</style>
