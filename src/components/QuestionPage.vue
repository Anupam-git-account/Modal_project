<template>
  <div class="quiz-app">
    <!-- Header -->
    <header class="quiz-header">
      <div class="header-title">Section 1, Module 1: General Knowledge</div>

      <!-- Timer and Clock Icon Toggle -->
      <div class="header-timer">
        <div v-if="showTimer">{{ formattedTime }}</div>
        <div v-else>
          <font-awesome-icon icon="clock" class="timer-icon" />
        </div>
      </div>

      <!-- New Button to Toggle Div -->
      <button @click="toggleMiddleDiv" class="toggle-middle-div-btn">
        <font-awesome-icon icon="pen-square" class="timer-icon" />
      </button>
    </header>
    <div v-if="showTimer">
      <button @click="toggleTimerVisibility" class="hide-timer-btn">
        Hide
      </button>
    </div>
    <div v-else>
      <button @click="toggleTimerVisibility" class="hide-timer-btn">
        Show
      </button>
    </div>
    <div class="sub-header">This is Test Application</div>

    <!-- Main Content -->
    <div class="quiz-content">
      <form @submit.prevent="submitQuiz">
        <div v-if="questions[currentQuestion].para" class="split-screen">
          <!-- Left Side: Paragraph -->
          <div class="left-pane">
            <p class="question-para">
              {{ questions[currentQuestion].para }}
            </p>
          </div>
          

          <!-- Middle Div (Toggled) -->
          <div v-if="showMiddleDiv" class="middle-pane">
            <p>This is the toggled div content!</p>
            <textarea id="review-content" />
          </div>

          <!-- Right Side: Question and Options -->
          <div class="right-pane">
            <b>{{ currentQuestion + 1 }}</b>
            <b>Mark For review</b>
            <div class="question-text">
              {{ questions[currentQuestion].question }}
            </div>
<!-- 
            <div
              v-if="questions[currentQuestion].type === 'single-choice'"
              class="options"
            >
              <button
                v-for="(option, index) in questions[currentQuestion].options"
                :key="index"
                type="button"
                @click="selectOption(index)"
                :class="[
                  'option-btn',
                  selectedOptions[currentQuestion] === index ? 'selected' : '',
                ]"
              >
                {{ option }}
              </button>
            </div> -->
 <div
            v-if="questions[currentQuestion].type === 'single-choice'"
            class="options"
          >
            <button
              v-for="(option, index) in questions[currentQuestion].options"
              :key="index"
              type="button"
              @click="selectOption(index)"
              class="option-btn"
            >
             <b  @click="selectOption(index)"
              :class="[
                'optColor',
                selectedOptions[currentQuestion] === index ? 'selected' : '',
              ]"
             
             >{{ String.fromCharCode(65 + index) }}</b>
              <span class="option-text">{{ option }}</span>
            </button>
          </div>
            <div
              v-else-if="questions[currentQuestion].type === 'open-ended'"
              class="open-ended"
            >
              <textarea
                v-model="openEndedAnswers[currentQuestion]"
                placeholder="Type your answer here..."
                class="open-ended-input"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Default Layout (No Paragraph) -->
        <div v-else class="question-area">
          <div style="display: flex; align-items: center; gap: 10px">
            <b class="number">{{ currentQuestion + 1 }}</b>
            <font-awesome-icon icon="bookmark " class="timer-icon" />
            <b>Mark For review</b>
            
          </div>

          <div class="question-text">
            {{ questions[currentQuestion].question }}
          </div>

          <div
            v-if="questions[currentQuestion].type === 'single-choice'"
            class="options"
          >
            <button
              v-for="(option, index) in questions[currentQuestion].options"
              :key="index"
              type="button"
              @click="selectOption(index)"
              class="option-btn"
            >
             <b  @click="selectOption(index)"
              :class="[
                'optColor',
                selectedOptions[currentQuestion] === index ? 'selected' : '',
              ]"
             
             >{{ String.fromCharCode(65 + index) }}</b>
              <span class="option-text">{{ option }}</span>
            </button>
          </div>

          <div
            v-else-if="questions[currentQuestion].type === 'open-ended'"
            class="open-ended"
          >
            <textarea
              v-model="openEndedAnswers[currentQuestion]"
              placeholder="Type your answer here..."
              class="open-ended-input"
            ></textarea>
          </div>
        </div>

        <!-- Navigation Buttons -->

        <!-- Footer -->
        <footer class="quiz-footer">
          <div class="footerr">
            <div class="foot">
              <p>
                Logged in as: <span>{{ username }}</span>
              </p>
            </div>
            <div class="navigation">
              <button
                @click="previousQuestion"
                :disabled="currentQuestion === 0"
                class="nav-btn"
                type="button"
              >
                Previous</button
              >&nbsp;
              <button
                v-if="currentQuestion < questions.length - 1"
                @click="nextQuestion"
                class="nav-btn"
                type="button"
              >
                Next
              </button>
              <button v-else type="submit" class="nav-btn">Submit</button>
            </div>
          </div>
          <button class="button">
            Question {{ currentQuestion + 1 }} of {{ questions.length }}
          </button>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "QuestionPage",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      username: localStorage.getItem("username") || "Guest", // Get username from localStorage or default to 'Guest'
      currentQuestion: 0,
      questions: [
        {
          question: "What year was the Eiffel Tower built?",
          type: "single-choice",
          options: ["1887", "1889", "1895", "1900"],
        },
        {
          question: "Describe a challenging project you've worked on.",
          type: "open-ended",
        },
        {
          para: "The Paragraphs module puts control back into the hands of content creators...",
          question: "What year was the Eiffel Tower built?",
          type: "single-choice",
          options: ["1887", "1889", "1895", "1900"],
        },
        {
          question: "What is your approach to debugging and troubleshooting?",
          type: "open-ended",
        },
        {
          question: "Which of the following is the capital of Japan?",
          type: "single-choice",
          options: ["Tokyo", "Seoul", "Beijing", "Singapore"],
        },
      ],
      openEndedAnswers: {},
      selectedOptions: {}, // Store selected option for each question
      timeRemaining: 35 * 60,
      timer: null,
      showTimer: true,
      showMiddleDiv: false, // State to control visibility of the middle div
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeRemaining / 60);
      const seconds = this.timeRemaining % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    },
  },
  methods: {
    selectOption(index) {
      this.selectedOptions[this.currentQuestion] = index;
    },
    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
      }
    },
    toggleTimerVisibility() {
      this.showTimer = !this.showTimer;
    },
    toggleMiddleDiv() {
      this.showMiddleDiv = !this.showMiddleDiv;
    },
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
        } else {
          clearInterval(this.timer);
          alert("Time's up!");
        }
      }, 1000);
    },

    //     submitQuiz() {
    //   // ... your existing code to construct the 'answers' object ...

    //   console.log("Quiz Submission:", answers);

    //   // Send the answers to the backend using your preferred method (e.g., Axios, Fetch API)
    //   fetch("https://your-backend-endpoint", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(answers),
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Backend response:", data);
    //       // Handle the backend response, e.g., show success message, redirect to another page
    //     })
    //     .catch((error) => {
    //       console.error("Error sending data to backend:", error);
    //       // Handle error, e.g., show error message to the user
    //     });
    // },
    submitQuiz() {
      alert(1);
      const answers = [];
      this.questions.forEach((question, index) => {
        let answer;
        if (question.type === "single-choice") {
          answer = question.options[this.selectedOptions[index]];
        } else if (question.type === "open-ended") {
          answer = this.openEndedAnswers[index];
        }
        answers.push({
          question: question.question,
          answer: answer,
        });
      });

      console.log("Quiz Submission:", answers);

      fetch("https://your-backend-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Backend response:", data);
          // Handle the backend response, e.g., show success message, redirect to another page
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
          // Handle error, e.g., show error message to the user
        });
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.sub-header {
  width: 95%;
  height: 4vh;
  background-color: #09498e;
  margin-left: 2.5%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: #fff;
  padding: 3px 0px 3px 0px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
}
.options-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.paragraph-question {
  text-align: left;
}

.selected {
  background-color: #4caf50;
  color: white;
}

.clock-icon {
  font-size: 24px;
  color: #09498e;
}

.timer-icon {
  font-size: 24px;
  color: #09498e;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-left: 14px !important;
}

.timer-icon:hover {
  transform: scale(1.2); /* Slight zoom effect on hover */
}

.hide-timer-btn {
  background-color: none;
  color: black;
  border: none;
  padding: 3px 10px;
  font-size: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  margin-top: -28px;
  margin-left: -15px;
  border-radius: 5px;
  border: 1px solid black;
}

.hide-timer-btn:hover {
  background-color: #09498e;
  color: #fff;
}
.quiz-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.split-screen {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.left-pane {
  flex: 1;
  border-right: 1px solid #ddd;
  padding-right: 20px;
  padding: 150px 20px 0 20px; /* Add right padding */
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.middle-pane {
  border-right: 1px solid #ddd;
  /* border-right: 1px solid grey; */
  padding-right: 20px;
  text-align: left;
  padding: 10px; /* Optional: add some padding for better content alignment */
  margin: 10px 0; /* Optional: add spacing above and below */
}
.right-pane {
  flex: 1;
  padding: 0 20px; /* Add padding on both sides */
}

.question-para {
  font-size: 16px;
  line-height: 1.5;
  color: #444;
}

.question-area {
  width: 30%; /* Set the width to 30% */
  margin: 0 auto; /* Center horizontally */
  text-align: center; /* Optional: Center the text inside the div */
  display: flex; /* Enable flex for optional vertical alignment */
  flex-direction: column; /* Ensure children stack vertically */
  justify-content: center; /* Optional: Center children vertically if needed */
  align-items: center; /* Center align children horizontally */
  /* background-color: #4CAF50; */
}

.question-text {
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
  text-align: center;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.option-btn {
  padding: 10px 15px;
  border: 1px solid black;
  background-color: #ffffff;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}


.option-btn.selected {
  background-color: #5ea8f2;
  border-color: black;
}

.open-ended-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.navigation {
  margin-top: 2px;
  display: flex;
  justify-content: flex-end;
}

.nav-btn {
  padding: 8px 15px;
  background-color: #086ad4;
  color: white;
  border: none;
  border-radius: 29px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.nav-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.footerr {
  display: flex;
  justify-content: space-between;
}

.number {
  background-color: black;
  padding: 5px 10px;
  color: white;
}

.option-btn {
  display: flex; /* Use flexbox for alignment */
  align-items: center; /* Vertically center content */
  justify-content: space-between; /* Push the text apart */
  width: 100%; /* Full width of container */
  padding: 10px; /* Add padding for a better look */
  text-align: left; /* Left-align the content */
  position: relative; /* For absolute positioning */
}

.optColor {
  font-weight: bold;
  margin-right: 10px;
  padding: 1px 8px;
  border: 1px solid black;
  border-radius: 50px;
}

.option-text {
  flex-grow: 1; /* Allow text to expand and be centered */
  text-align: center; /* Center the text */
}

.selected {
  background-color: #0b429c; /* Example selected style */
}
</style>
