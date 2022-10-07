<template>
    <div>
        <ul class="list-head">
            <li>#</li>
            <li>Date</li>
            <li>Category</li>
            <li>Value</li>
        </ul>
        <AddUserDataList v-for="item of list" v-bind:key="item.id" v-bind:id="item.id" v-bind:date="item.date"
            v-bind:category="item.category" v-bind:value="item.value">
        </AddUserDataList>
    </div>
</template>

<script>
import AddUserDataList from './AddUserDataList.vue';
export default {
    name: "AddList",
    components: { AddUserDataList },
    computed: {
        list() {
            return this.$store.getters.getAllData;
        }
    }
}
</script>

<style lang="scss">
.list-head {
    width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    list-style: none;
    border-bottom: 1px solid #444;
    align-items: center;
    text-align: start;
    margin-top: 20px;
    margin-bottom: 20px;


    & li {
        font-weight: bold;
        display: block;
        width: 25%;
    }
}
</style>