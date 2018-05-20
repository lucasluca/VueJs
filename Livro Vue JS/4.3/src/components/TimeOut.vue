<template>
<div>
    <h1>TimeOut</h1>
    <h1>{{ titulo }}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {

            titulo: 'Mane Garrincha'
        }
    },

    created() {
        console.log('fui criado');
        setTimeout(() =>  this.titulo = 'Mineirao' , 4000);
    }
}
</script>

<style scoped>

</style>


