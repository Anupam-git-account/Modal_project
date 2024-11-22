<template>
  <h1>Choose a Full-Length Practice</h1>
  <div class="next-div">
    <div style="text-align: left">
      <label for="testType">Test Type *</label>
      <select id="testType">
        <option>SAT</option>
        <option>CAT</option>
      </select>
    </div>
    <div style="text-align: left">
      <label for="practiceTest">Practice Test *</label>
      <select id="practiceTest">
        <option>Select</option>
        <option>SAT Practice 1</option>
        <option>SAT Practice 2</option>
        <option>SAT Practice 3</option>
        <option>SAT Practice 4</option>
        <option>SAT Practice 5</option>
        <option>SAT Practice 6</option>
        <option>SAT Essay Practice 1</option>
        <option>SAT Essay Practice 2</option>
        <option>SAT Essay Practice 3</option>
      </select>
    </div>
  </div>
  <footer class="footer">
    <button @click="goToQuestionsPage" class="next-button">Next</button>
  </footer>
</template>

<script>
export default {
  name: "NextPage",
  methods: {
    goToQuestionsPage() {
      this.$router.push({ name: "QuestionPage" });
    },
  },
};
</script>

<style scoped>
/* Styling for the container */
div {
  max-width: 600px;
  margin: auto;
}

.next-div {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

.next-div label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.next-div select {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.next-div footer {
  display: flex;
  justify-content: flex-end;
}

.next-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.next-button:hover {
  background-color: #0056b3;
}

/* Styling for the footer and button */
footer {
  display: flex;
  justify-content: flex-end;
  bottom: 0%;
  position: absolute;
  width: 100%;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}

.next-button {
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.next-button:hover {
  background-color: #004a99;
}
</style>
