<template>
  <div>
    <button @click="showAlert">Show Alert</button>
  </div>
</template>

<script>
// Import SweetAlert2
import Swal from 'sweetalert2';

export default {
  name: 'App',
  methods: {
    showAlert() {
      Swal.fire({
        title: 'Hello Vue!',
        text: 'This is a SweetAlert2 alert in a Vue component.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }
};
</script>
