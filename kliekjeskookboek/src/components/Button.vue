<template>
    <button :style="{background:color}" class="btn">{{ text }}</button>
</template>

<script>
    export default {
        name: 'GenericButton',
        props: {
            text: {
                type: String,
                default: 'Button'
            },
            color: {
                type: String,
                default: '#000'
            }
        },
    }
</script>

<style>
    .btn {
        background: #fff;
        padding: 10px;
    }
</style>