<template>
  <div class="test">
      <input type="text" v-model="title">
      <h1>{{title}}</h1>
      <p>{{user.nome}}</p>
      <p v-if="mostrarNome">{{user.sobrenome}}</p>
      <ul>
          <li v-for="item in items">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: 'test',
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
        }
    }
</script>

<style scoped>
    
</style>

