<template>
    <header>
        <h1>{{ title }}</h1>
        <Button text="Add user" color="green"></Button>
        <Button text="Remove user" color="red"></Button>
        <Button text="Add recipe" color="green"></Button>
        <Button text="Remove recipe" color="red"></Button>
    </header>
</template>

<script>
    import Button from './Button.vue';

    export default {
        name: 'TestHeader',
        components: {
            Button,
        },
        props: {
            title: {
                type: String,
                default: 'Default'
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>