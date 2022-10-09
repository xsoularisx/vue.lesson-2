<template>
  <div>
    <ul class="list-head">
      <li>#</li>
      <li>Date</li>
      <li>Category</li>
      <li>Value</li>
    </ul>
    <AddUserDataList v-for="item of paginatedData" v-bind:key="item.id" v-bind:id="item.id" v-bind:date="item.date"
      v-bind:category="item.category" v-bind:value="item.value">
    </AddUserDataList>
    <form class="pagination">
      <button class="pagination-item" v-bind:disabled="pageNumber === 0" v-on:click="prevPage">
        предыдущая страница
      </button>
      <button class="pagination-item" v-bind:disabled="pageNumber >= pageCount -1" v-on:click="nextPage">
        следующая страница
      </button>
    </form>
  </div>
</template>

<script>
import AddUserDataList from './AddUserDataList.vue';

export default {
  name: "AddList",
  components: { AddUserDataList },
  data() {
    return {
      pageNumber: 0,
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10
    },
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    list() {
      return this.$store.getters.getAllData;
    },
    pageCount() {
      let listLength = this.list.length,
        listSize = this.size;
      return Math.ceil(listLength / listSize);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.list
        .slice(start, end);
    }
  }
}
</script>

<style lang="scss">
.list-head {
  box-sizing: border-box;
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

.pagination {
  box-sizing: border-box;
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;

  &-item {
    height: 25px;
    width: 200px;
    cursor: pointer;
  }
}
</style>