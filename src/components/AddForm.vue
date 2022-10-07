<template>
  <form class="form">
    <input class="form-input" type="text" name="date" id="date" placeholder="payment date">
    <input class="form-input" type="text" name="category" id="category" placeholder="payment category"
      v-model="selected">
    <select class="select" v-model="selected">
      <option disabled value="">Select payment description</option>
      <option v-for="item in list">{{item}}</option>
    </select>
    <input class="form-input" type="text" name="value" id="value" placeholder="payment amount">
    <div class="form-button">ADD</div>
  </form>

</template>
<script>
export default {
  name: 'Addform',
  data() {
    return {
      selected: '',
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