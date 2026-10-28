<template>
    <div id="home">
        <div id="carousel">
            <img src="../../assets/home/img-1.jpg">
        </div>
        <section id="apresentacao">
            <div id="sobre">
                <p>Flow Podcast é uma conversa descontraída, longa e livre, como um papo de boteco entre amigos. No Flow garantimos um espaço onde o convidado pode desenvolver suas ideias sem qualquer tipo de pauta ou as restrições normais de outras mídias, como agenda política/filosófica.</p>
                <h1>DE SEGUNDA A SEXTA ÀS 20H</h1>
                <p id="except">(às vezes o horário muda, quase sempre atrasa)</p>
            </div>
            <div id="redes">
                <div id="title">
                    <h2>Ao vivo no Youtube, Twitch e Facebook!</h2>
                </div>
                <div id="btn-grid">
                    <a href="#" target="_blank" class="btnDefault btn-1">Youtube</a>
                    <a href="#" target="_blank" class="btnDefault btn-2">Twitch</a>
                    <a href="#" target="_blank" class="btnDefault btn-3">Facebook</a>
                </div>
                <div>
                    <div id="socials">
                        <a href="#" target="_blank"><img src="../../assets/home/socials/youtube.svg"></a>
                        <a href="#" target="_blank"><img src="../../assets/home/socials/twitch.svg"></a>
                        <a href="#" target="_blank"><img src="../../assets/home/socials/spotify.svg"></a>
                        <a href="#" target="_blank"><img src="../../assets/home/socials/amazon.svg"></a>
                        <a href="#" target="_blank"><img src="../../assets/home/socials/apple.svg"></a>
                        <a href="#" target="_blank"><img src="../../assets/home/socials/discord.svg"></a>
                        <a href="#" target="_blank"><img src="../../assets/home/socials/rss.svg"></a>
                    </div>
                    <div id="espe">
                        <p>Não é uma entrevista!</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="eps-recentes">
            <h3>Quem já passou por aqui</h3>
            <p>Ouça nossos episódios</p>
            <div id="eps-cards">
                <epscard v-for="episode in episodes" :key="episode.videoId" :episode="episode"/>
            </div>
        </section>
        <div id="vercontainer">
            <router-link to="/episodios" id="vermais">Ver todos</router-link>
        </div>
    </div>
</template>

<script>
import epscard from '../epscard'
import episodios from '../../data/episodios.json'

export default {
  name: 'home',
  components: {
    epscard
  },
  data () {
    return {
      episodes: episodios.slice(0, 9)
    }
  }
}
</script>

<style>
    #home{
        color: rgb(196, 196, 196);
    }
    #carousel{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 3%;
    }
    #carousel img{
        max-width: 100%;
        border-radius: 5px;
    }
    #apresentacao{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding: 0 15%;
    }
    #sobre{
        margin: 35px 10% 0px 10%;
        text-align: center;
    }
    #sobre p{
        margin: 5px 0;
        font-size: 1.09rem;
        font-weight: 500;
        letter-spacing: 1.5;
        line-height: 1.5;
    }
    #sobre #except{
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    #sobre h1{
        margin: 10px 0;
        font-size: 2rem;
        letter-spacing: 12px;
    }
    #redes #title{
        letter-spacing: 2px;
        font-size: 1rem;
    }
    #title{
        margin-bottom: 20px;
    }
    #btn-grid{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: 0 20%;
        gap: 32px;
    }
    .btnDefault{
        border: 1px solid var(--color-);
        text-align: center;
        padding: 9px 45px;
        border-radius: 12px;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        transition-property: transform background;
        transition: 0.2s linear;
    }
    .btnDefault:hover{
        transform: scale(1.1);
    }
    .btn-1:hover{
        background: var(--ytb);
    }
    .btn-2:hover{
        background: var(--twitch);
    }
    .btn-3:hover{
        background: var(--fb);
    }
    #socials {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 35px;
    }
    #socials a img{
        width: 32px;
        transition: transform .2s linear;
    }
    #socials a img:hover{
        transform: scale(1.1);
    }
    #espe{
        display: flex;
        justify-content: center;
    }
    #espe p{
        text-align: center;
        margin-top: 30px;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: 100;
        padding: 5px;
    }
    #espe p:hover{
        transform: scale(1.1);
        background: var(--color-);
        color: white;
        font-weight: 700;
        letter-spacing: 2px;
    }
    #eps-recentes{
        margin: 25px 20px;
        border-top: 1px solid white;
        text-align: center;
    }
    #eps-recentes h3{
        font-size: 1.8rem;
        margin-top: 25px;
    }
    #eps-recentes > p{
        text-transform: uppercase;
        margin: 10px 0 20px 0;
    }
    #eps-cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 55px;
        row-gap: 35px;
        margin: 0 3%;
    }
    #vercontainer{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    #vermais{
        color: var(--color-);
        text-transform: uppercase;
        padding: 5px 10px;
        border: 1px solid var(--color-);
        margin-bottom: 10px;
        border-radius: 5px;
        transition-property: background color;
        transition: .2s linear;
    }
    #vermais:hover{
        background: var(--color-);
        color: var(--main-bg);
    }
    @media (max-width: 1200px){
        /*Mudando a grid de videos pra 2 colunas*/
        #eps-cards{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 992px){
        /*Mudando a grid de videos pra 1 colunas*/
        #eps-cards{
            grid-template-columns: 1fr;
        }
        #btn-grid{
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr;
            margin: 0;
        }
        #sobre h1{
            font-size: 1.7rem;
            letter-spacing: 7px;
        }
    }
</style>
