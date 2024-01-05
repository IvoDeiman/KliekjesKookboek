<template>
    <button @click="onClick()" :style="{ background:color }" class="btn">{{ text }}</button>
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
        methods: {
            onClick() {
                console.log("Clicked");
            }
        }
    }
</script>