<template>
  <div>
    <!-- Corrected inline style syntax -->
    <Header style="margin-top:-60px;" />
    <!-- <AlertBox :alertTitle="alertTitle" :alertMessage="alertMessage" />
    <button @click="showSwalAlert">Show SweetAlert</button> -->
    <!-- Ensure consistent component naming -->
    <QuestionsList />
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import AlertBox from './components/AlertBox.vue';
import Header from './components/Header.vue';
import QuestionsList from './components/QuestionsList.vue'; // Adjusted the import name

export default {
  name: 'App',
  components: {
    AlertBox,
    Header,
    QuestionsList // Ensure this matches your template
  },
  data() {
    return {
      title: "My First Vue Application",
      header: "header is here",
      text: "text is here",
      alertTitle: "Warning!",
      alertMessage: "This is an alert message for the user."
    };
  },
  methods: {
    showSwalAlert() {
      Swal.fire({
        title: 'Hello!',
        text: 'This is a SweetAlert2 alert in Vue.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
