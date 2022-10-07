<template>
    <ul class="list-user">
        <li>{{id}}</li>
        <li>{{date}}</li>
        <li>{{category}}</li>
        <li>{{value}}</li>
    </ul>
</template>

<script>
export default {
    name: 'AddUserDataList',
    props: {
        id: Number,
        date: String,
        category: String,
        value: Number,
    },
}
</script>

<style lang="scss">
.list-user {
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
        display: block;
        width: 25%;
    }
}
</style>