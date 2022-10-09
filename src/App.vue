<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav class="nav">
      <router-link :to="'/'" class="nav-item">home</router-link>
      <router-link :to="'/about'" class="nav-item">about</router-link>
    </nav>
    <router-view />
    <h1>my personal costs</h1>
    <AddButton v-on:clickButton="toggleForm"></AddButton>
    <ul class="pay">
      <li class="pay-item">
        <router-link :to="'/add/firstCategory/oneValue'">first pay</router-link>
      </li>
      <li class="pay-item">
        <router-link :to="'/add/secondCategory/twoValue'">second pay</router-link>
      </li>
      <li class="pay-item">
        <router-link :to="'/add/thirdCategory/threeValue'">third pay</router-link>
      </li>
    </ul>
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
      formActive: false,
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
    this.$store.dispatch('loadList');

    if (this.$route.params.category) {
      this.formActive = true;
    };
    if (this.$route.params.value) {
      this.formActive = true;
    };
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

.nav {
  box-sizing: border-box;
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;

  &-item {
    text-decoration: none;
  }
}

.pay {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
}
</style>
