<template>
  <div id="app">
    <toolbar></toolbar>
    <div class="search-wrapper">
    <input class="input" type="text" v-model="searchQuery" placeholder="Search title"/>

  </div>
    <div class="md-layout">
      <div class="md-layout-item md-size-33" v-for="(quadrinho, index) in resultQuery" :key="quadrinho.id">
        <comic v-if="index<comicsToShow"
          :titulo="quadrinho.title"
          :descricao="quadrinho.description"
          :imagem="getImagem(quadrinho)"
          
        ></comic>
      </div>
    </div>
    <div class="button-section">
      <md-button @click="comicsToShow += 9" class="md-fab md-primary">
        <md-icon>+</md-icon>
      </md-button>
    </div>
  </div>
</template>

<script>
import ApiRequests from '@/services/ApiRequests';
import Comic from '@/components/Comic';
import Toolbar from '@/components/Toolbar';

export default {
  name: 'App',
  components: {
    Comic,
    Toolbar
  },
  data() {
    return {
      searchQuery: null,
      quadrinhos: [],
      comicsToShow: 9
    }
  },
  created() {
    ApiRequests.getAllComics(100, comics => {
      this.quadrinhos = comics.data.data.results;
    })
  },
  methods: {
    getImagem: function(quadrinho) {
      if (quadrinho.images.length) {
        return quadrinho.images[0].path + '.jpg';
      }
      else{
        return "https://i2.wp.com/theconventioncollective.com/wp-content/uploads/2018/10/logo-Marvel-Comics-logo-hq.jpg?fit=1600%2C1200"
      }
    }
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
      return this.quadrinhos.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
      })
      }else{
        return this.quadrinhos;
      }
    }
  }
}
</script>

<style scoped>
    .md-layout{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1254px;
        margin: auto;
    }

    .md-button{
        margin: 4% 0 4% 0;
        background-color:#ed1d24;
        color:white;  
        font-weight: 1000;
    }
    .button-section{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: row;
      align-content: center;
    }

    .search-wrapper{
      display: flex;
      justify-content: center;
      /* text-align: center; */
      margin: 12vh 1% 2%;
    }




</style>