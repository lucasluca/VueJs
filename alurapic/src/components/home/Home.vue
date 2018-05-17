<template>

 <div class="corpo">
   <h1 class="centralizado">AluraPic</h1>
   <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
       <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto.titulo">
                <meu-painel :titulo="foto.titulo">
                    <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate="1.2"/>
                    <meu-botao :confirmacao="true" estilo="padrao" rotulo="remover" tipo="button" @botaoAtivado="remove(foto)"/>
                </meu-painel>
            </li>
        </ul>
 </div>
  
</template>

<script>

import Painel from '../shared/painel/Painel';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';

export default {

  components : {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      fotos: [],
      filtro: ''
    }
  },
  methods: {
    remove(foto) {
         
        alert('Remove ' + foto.titulo);
        
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(function(response) {
          this.fotos = response.data;
      })
      
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        // filtra a lista, por enquanto vamos retornar uma lista em branco
        let exp = new RegExp(this.filtro.trim(), 'i');
        // retorna apenas as fotos que condizem com a expressão
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        // se o campo estiver vazio, não filtramos, retornamos a lista
        return this.fotos;
      }
    }
  }

}
  
</script>

<style scoped>

.titulo {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .filtro {
    display: block;
    width: 100%;
  }


</style>
