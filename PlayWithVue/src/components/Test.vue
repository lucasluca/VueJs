<template>
  <div class="test">
      <input type="text" v-model="title">
      <h1>{{title}}</h1>
      <p>{{user.nome}}</p>
      <p v-if="mostrarNome">{{user.sobrenome}}</p>
      <ul>
          <li v-for="item in items">{{item.title}}</li>
      </ul>
      <button v-on:click="greet('Passando parametros')">Chama Funcao</button>
      <br>
      <input type="text" v-on:keyup="clicado" v-on:keyup.enter="enviou">
      <hr>
      <br>

      <label for="">Nome:</label><input type="text" v-model="user.nome">
      <br>
      <label for="">Sobrenome:</label><input type="text" v-model="user.sobrenome">
      <br>
      <h1>{{nomeCompleto}}</h1>
      <br>
      <hr>
      <h3>{{msg}}</h3>

  </div>
</template>

<script>
    export default {
        name: 'test',
        props: {
            msg: {
                type: String,
                default: 'Vue e legal'
            }
        },
        data() {
            return {
                title: 'Ola Mundo',
                user: {
                    nome: 'Lucas',
                    sobrenome: 'Agusuto'
                },
                mostrarNome: true,
                items: [
                    {title: "Primeiro Item"},
                    {title: "Segundo Item"},
                    {title: "Terceiro Item"},
                ]
            }
        }, 
        methods: {
            greet: function(parametro) {
                alert(parametro);
            },
            clicado: function(e) {
                console.log(e.target.value);
            },
            enviou: function() {
                console.log('Apertou Enter ne');
            }
        },
        computed: {
            nomeCompleto: function() {
                return this.user.nome + ' ' + this.user.sobrenome;
            }
        }
    }
</script>

<style scoped>
    
</style>

