<template>
<div>
    <h1>VueOnce</h1>
    <h1>{{ titulo }}</h1>
    <span v-if="hide" v-once>{{ titulo }}</span>
    <hr>
    <button @click="hideText" >Esconder</button>
</div>
</template>

<script>
export default {
    data() {
        return {

            titulo: 'Mane Garrincha',
            hide: true
        }
    },

    created() {

        setTimeout(() =>  this.titulo = 'Mineirao' , 4000);
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


