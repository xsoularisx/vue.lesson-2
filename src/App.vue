<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>my personal costs</h1>
    <AddButton v-on:clickButton="toggleForm"></AddButton>
    <AddForm v-if="formActive" v-on:addUserData="addUserData"></AddForm>
    <AddList></AddList>
  </div>
</template>

<script>
import AddButton from './components/AddButton.vue';
import AddForm from './components/AddForm.vue';
import AddList from './components/AddList.vue';

export default {
  name: "App",
  components: {
    AddButton,
    AddForm,
    AddList
  },
  data() {
    return {
      formActive: true,
    }
  },
  methods: {
    toggleForm() {
      this.formActive = !this.formActive
    },
    addUserData(data) {
      this.$store.commit('setUserData', data)
    }
  },
  mounted() {
    this.$store.dispatch('loadList')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
