<template>
  <div class="information-page">
    <div class="info-container">
      <!-- Sidebar Items -->
      <div class="sidebar-item">
        <font-awesome-icon icon="clock" class="icon" />
        <p class="text"><b>Timing</b></p>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="clipboard-list" class="icon" />
        <p class="text"><b>&nbsp;Scores: 85%</b></p>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="universal-access" class="icon" />
        <p class="text"><b>Assistive Technology: Enabled</b></p>
      </div>
      <div class="sidebar-item">
        <font-awesome-icon icon="unlock" class="icon" />
        <p class="text"><b>No Device Lock</b></p>
      </div>

     
      <button @click="proceed">Proceed</button>
    </div>

    <!-- Footer -->
    <footer class="footers">
      <p>
        Logged in as: <span>{{ username }}</span>
      </p>
    </footer>
  </div>
</template>

<script>


export default {
  data() {
    return {
      username: localStorage.getItem("username") || "Guest", // Get username from localStorage or default to 'Guest'
    };
  },
  methods: {
    proceed() {
      // Logic when user clicks proceed, could be navigation or any other action
      this.$router.push({ name: "Info" }); // Example: Navigate to next page
    },
  },
};
</script>

<style scoped>
.information-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  padding-bottom: 5rem; /* Ensuring footer does not overlap content */
}

.info-container {
  background-color: white;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.info-paragraph {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  color: #333;
}

button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:focus {
  outline: none;
}

/* Sidebar Styling */
.sidebar {
  position: fixed;
  top: 20%;
  right: 0;
  background-color: #fff;
  border-left: 2px solid #ddd;
  padding: 1rem;
  width: 250px;
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.1);
}

.sidebar-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon {
  margin-right: 10px;
  font-size: 1.5rem;
  margin-top: -11px;
}

.text {
  font-size: 1rem;
  color: #333;
  font-family: "Times New Roman", Times, serif;
}

/* Footer Styling */
.footers {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: white;
  text-align: left;
  padding: 1rem;
  font-size: 1rem;
  border: 2% white;
}

footers span {
  font-weight: bold;
}
</style>
