<template>
    <div>
        <button v-on:click="clickButton" class="button">
            add new costs +
        </button>
    </div>
</template>

<script>
export default {
    name: 'AddButton',
    methods: {
        clickButton() {
            this.$emit('clickButton');
        },
    }
}

</script>

<style lang="scss">
.button {
    background-color: cadetblue;
    border: 1px solid cadetblue;
    border-radius: 20px;
    color: white;
    padding: 10px 50px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: transparent;
        color: cadetblue;
    }

    &:active {
        background-color: cadetblue;
        color: white;
    }
}
</style>