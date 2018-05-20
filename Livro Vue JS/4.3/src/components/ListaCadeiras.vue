<template>
<div>
    <h1>VueOnce</h1>
    <h1>{{ titulo }}</h1>
    <span v-if="hide" v-once>{{ titulo }}</span>
    <hr>
    <button v-if="button" @click="hideText" >Esconder</button>
    <hr>
    <input v-model="titulo" type="text">
    <hr>
    <ul>
        <li v-for="cadeira in cadeiras" :key="cadeira">{{ cadeira }}</li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {

            titulo: 'Mane Garrincha',
            hide: true,
            button: false,
            cadeiras: [
                '30.000 brancas',
                '30.000 cinzas',
                '10.000 vips'
            ]
        }
    },

    created() {
        setTimeout(() =>  {
            this.titulo = 'Mineirao' ;
            this.button = true;
            }, 4000);
    },

    methods: {
        hideText() {
            if(this.hide) {
                this.hide = false;
            } else {
                this.hide = true;
            }   
        }
    }
}
</script>

<style scoped>

</style>


