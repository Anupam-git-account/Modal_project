<template>
  <header class="header" >
    <h1>Test Application</h1>
    <div class="header-info">
      <div class="timer">Time Left: {{ formattedTime }}</div>
      <div v-if="userId" class="user-id">Logged in as: {{ userId }}</div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      timeLeft: 2 * 60 * 60, // 2 hours in seconds
      userId: localStorage.getItem('username'), // Get user ID from localStorage
    };
  },
  computed: {
    // Compute formatted time as hours:minutes:seconds
    formattedTime() {
      const hours = Math.floor(this.timeLeft / 3600);
      const minutes = Math.floor((this.timeLeft % 3600) / 60);
      const seconds = this.timeLeft % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.header {
    
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: brown; /* Adjust color as needed */
  color: white;
  
}

.header-info {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.timer {
  font-size: 20px;
}

.user-id {
  font-size: 16px;
  margin-top: 5px;
}
</style>
