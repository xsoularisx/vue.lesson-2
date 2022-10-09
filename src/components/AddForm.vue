<template>
  <form class="form">
    <input v-model="date" class="form-input" type="text" name="date" id="date" placeholder="payment date">
    <input v-model="category" class="form-input" type="text" name="category" id="category"
      placeholder="payment category">
    <select class="select" v-model="category">
      <option disabled value="">Select payment description</option>
      <option v-for="item in list">{{item}}</option>
    </select>
    <input v-model.number="value" class="form-input" type="text" name="value" id="value" placeholder="payment amount">
    <div v-on:click="addUserData" class="form-button">ADD</div>
  </form>

</template>
<script>
export default {
  name: 'Addform',
  data() {
    return {
      // id: 1,
      date: '',
      category: '',
      value: '',
    }
  },
  methods: {
    addUserData() {
      this.$emit('addUserData', {
        // id: this.id++,
        date: this.date,
        category: this.category,
        value: this.value,
      })
    }
  },
  computed: {
    list() {
      return this.$store.getters.getCategoryList
    }
  },
  mounted() {
    this.$store.dispatch('loadCategories')
  }
}

</script>

<style lang="scss">
.form {
  box-sizing: border-box;
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &-input {
    padding: 10px 5px;
    margin-top: 10px;
  }

  &-button {
    background-color: cadetblue;
    border: 1px solid cadetblue;
    color: white;
    padding: 10px 50px;
    margin-top: 10px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: transparent;
      color: cadetblue;
    }
  }
}

.select {
  margin: 0 auto;
  width: 100%;
  height: 39px;
  margin-top: 10px;
}
</style>