<template>
  <div class="alert-box">
    <h2>{{ alertTitle }}</h2>
    <p>{{ alertMessage }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlertBox',
  props: {
    alertTitle: {
      type: String,
      default: 'Default Alert Title'
    },
    alertMessage: {
      type: String,
      default: 'Default alert message'
    }
  }
};
</script>

<style scoped>
.alert-box {
  border: 1px solid #f5c6cb;
  background-color: #f8d7da;
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  color: #721c24;
}
</style>
