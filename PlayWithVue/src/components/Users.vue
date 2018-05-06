<template>
  <div class="users">
      <h1>Users</h1>
      <hr>
      <br>


        <form v-on:submit="addUser">

            <input type="text" v-model="newUser.name" placeholder="insira o nome">
            <br>
            <input type="text" v-model="newUser.email" placeholder="insira o email">
            <br>
            <input type="submit" value="Adicionar usuario" >

        </form>


      <br>
      <hr>
      <ul>
          <li v-for="user in users">
              <input type="checkbox" class="toggle" v-model="user.contato">
              <span :class="{contato: user.contato}">
                {{user.name}}  :  {{user.email}} <button v-on:click="deleteUser(user)">X</button>
              </span>
          </li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: 'users',
        props: {
            
        },
        data() {
            return {
                newUser: {},
                users: [
                    {
                        name: 'Lucas',
                        email: 'Testando@gmail.com',
                        contato: false
                    },
                    {
                        name: 'Eduarda',
                        email: 'Testando@gmail.com',
                        contato: false
                    },
                    {
                        name: 'Linguica',
                        email: 'Testando@gmail.com',
                        contato: false
                    }
                ]
                
            }
        }, 
        methods: {
            addUser: function(e) {
                console.log('Adcionou');
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contato: false
                });
                e.preventDefault();
            },
            deleteUser: function (user) {
                this.users.splice(this.users.indexOf(user), 1);
            }
        },
        created: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/users')
                .then(function(response) {
                    this.users = response.data;
                })
        }
    }
</script>

<style scoped>

    .contato {
        text-decoration: line-through;
    }
    
</style>

