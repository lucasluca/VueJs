<template>
<div>
    <h1>VueOnce</h1>
    <h1>{{ titulo }}</h1>
    <span v-once>{{ titulo }}</span>
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

        setTimeout(() =>  this.titulo = 'Mineirao' , 4000);
    }
}
</script>

<style scoped>

</style>


