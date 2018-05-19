<template>

 <div class="corpo">
   <h1 class="centralizado">AluraPic</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

   <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">
       <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto._id">
                <meu-painel :titulo="foto.titulo">
                    <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate="1.2"/>
                    <router-link :to="{ name: 'altera', params: { id : foto._id }}">
                      <meu-botao rotulo="Alterar" tipo="button"/>
                    </router-link>  
                    <meu-botao :confirmacao="true" estilo="perigo" rotulo="Remover" tipo="button" @botaoAtivado="remove(foto)"/>
                </meu-painel>
            </li>
        </ul>
 </div>
  
</template>

<script>

import Painel from '../shared/painel/Painel';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva';
import Botao from '../shared/botao/Botao';
import FotoService from '../../domain/foto/FotoService';


export default {

  components : {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {
    return {
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },
  methods: {
    remove(foto) {

      this.service
        .apaga(foto._id)
        .then(
          () => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com sucesso'
          }, 
          err => {
            err => this.mensagem = err.message;
            console.log(err);
          }
        )

      //  this.resource
      //   .delete({id: foto._id})
      //   .then(
      //     () => {
      //       let indice = this.fotos.indexOf(foto);
      //       this.fotos.splice(indice, 1);
      //       this.mensagem = 'Foto removida com sucesso'
      //     }, 
      //     err => {
      //       this.mensagem = 'Não foi possível remover a foto';
      //       console.log(err);
      //     }
      //   )
         
        // this.$http
        // .delete(`v1/fotos/${foto._id}`)
        // .then(() => {
        //     let indice = this.fotos.indexOf(foto); // acha a posição da foto na lista
        //     this.fotos.splice(indice, 1); // a instrução altera o array
        //     // assim que apagar, exibe a mensagem para o usuário
        //     this.mensagem = 'Foto removida com sucesso'
        //   }, 
        //   err => {
        //     this.mensagem = 'Não foi possível remover a foto';
        //     console.log(err);
        //   }
        // );
        
    }
  },
  created() {

    // this.resource = this.$resource('v1/fotos{/id}');

     // criando uma instância do nosso serviço que depende de $resource
    this.service = new FotoService(this.$resource);

    this.service
      .lista()
      .then(fotos => this.fotos = fotos, 
      err =>  { 
        this.mensagem = err.message;
      });


    // this.resource
    //   .query()
    //   .then(res => this.fotos = res.data, err => console.log(err));

    // this.$http.get('v1/fotos')
    //   .then(function(response) {
    //       this.fotos = response.data;
    //   })
      
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
