<template>
  <div class="modal" v-if="isShown">
    <div class="modal-close" v-on:click="$modal.hide(name)">&#10006;</div>
    <div class="modal-main">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddModal',
  data() {
    return {
      isShown: false,
    }
  },
  props: {
    name: String,
  },
  methods: {
    show(name) {
      if (this.name == name) {
        this.isShown = true
      }
    },
    hide(name) {
      if (this.name == name) {
        this.isShown = false
      }
    }
  },
  mounted() {
    this.$modal.EventEmitter.$on('show', this.show);
    this.$modal.EventEmitter.$on('hide', this.hide);
  }
}
</script>

<style lang="scss">
.modal {
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;

  &-close {
    cursor: pointer;
  }
}
</style>