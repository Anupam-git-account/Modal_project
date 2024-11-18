<template>
  <div>
    <div class="question-container">
      <!-- Question number and the current question text -->
      <p class="question-text">
        <strong>Question {{ currentIndex + 1 }} of {{ questions.length }}</strong>
      </p>
      <p class="question-text"><strong>{{ currentQuestion.question }}</strong></p>
      
      <div v-if="currentQuestion.type === 'single-choice'" class="options-container">
        <div 
          v-for="(option, index) in currentQuestion.options" 
          :key="index" 
          class="option"
          :class="{ 'selected': selectedAnswer === option }"
          @click="selectAnswer(option)"
        >
          {{ option }}
        </div>
      </div>

      <div v-if="currentQuestion.type === 'open-ended'">
        <textarea v-model="selectedAnswer" placeholder="Your answer"></textarea>
      </div>

      <div v-if="currentQuestion.type === 'one-line-answer'">
        <input 
          type="text" 
          v-model="selectedAnswer" 
          placeholder="Your answer" 
          class="one-line-answer" 
        />
      </div>
    </div>

    <!-- Question List in the top-right corner -->
   <div class="questions-container">
    
  <h2 class="container-title">Question List</h2>
  
  <div class="question-list">
    <div class="question-buttons">
      <button
        v-for="(question, index) in questions"
        :key="index"
        class="question-btn"
        :class="{
          'not-answered': !answers[index] && currentIndex !== index, 
          'answered': answers[index], 
          'current': currentIndex === index,
          'not-selected': !answers[index] && currentIndex === index
        }"
        @click="currentIndex = index"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
   <div class="status-boxes">
<div class="status-box submitted" title="Submitted">
  <p style="color: black; font-size: 10px; marginLeft:2px;">Submitted</p>
</div>
    <div class="status-box not-answered" title="Not Answered"><p style="color: black; font-size: 10px; marginLeft:2px;">Not yet Submitted</p></div>
    <div class="status-box present" title="Present Question"><p style="color: black; font-size: 10px; marginLeft:2px;">Present Question</p></div>
  </div>
</div>



    <!-- Navigation buttons -->
    <div class="navigation-buttons">
      <button class="backandsubmit" @click="previousQuestion" :disabled="currentIndex === 0">Back</button>
      <button class="backandsubmit" @click="nextQuestion" :disabled="currentIndex === questions.length - 1">Next</button>
    </div>

    <!-- Submit Button shown after last question -->
    <div v-if="currentIndex === questions.length - 1">
      <button class="submit-button" @click="submitAnswers">Submit</button>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
  name: 'QuestionsList',
  data() {
    return {
      currentIndex: 0,
      selectedAnswer: '', // This will store the answer for the current question
      answers: [], // Store answers here
     questions: [
  {
    question: "What is your favorite programming language?",
    type: "single-choice",
    options: ["JavaScript", "Python", "Java", "C++"]
  },
  {
    question: "Describe a challenging project you've worked on.",
    type: "open-ended"
  },
  {
    question: "What is your approach to debugging and troubleshooting?",
    type: "open-ended"
  },
  {
    question: "What tools do you use to monitor and analyze the performance of your applications?",
    type: "open-ended"
  },
  {
    question: "What is your current role in your organization?",
    type: "single-choice",
    options: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer"]
  },
  {
    question: "How do you ensure the security of your web applications?",
    type: "open-ended"
  },
  {
    question: "What is your approach to debugging and troubleshooting?",
    type: "open-ended"
  },
  {
    question: "What tools do you use to monitor and analyze the performance of your applications?",
    type: "open-ended"
  },
  {
    question: "What is your current role in your organization?",
    type: "single-choice",
    options: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer"]
  },
  {
    question: "Have you worked with cloud services like AWS or Azure?",
    type: "single-choice",
    options: ["Yes, AWS", "Yes, Azure", "Both", "No"]
  },
  {
    question: "What is your experience with Agile methodology?",
    type: "single-choice",
    options: ["Scrum", "Kanban", "None", "Other"]
  },
  {
    question: "What programming languages are you most proficient in?",
    type: "one-line-answer"
  },
  {
    question: "How do you handle stress and tight deadlines?",
    type: "one-line-answer"
  },
  {
    question: "What is your current role in your organization?",
    type: "single-choice",
    options: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "DevOps Engineer"]
  },
  {
    question: "Have you worked with cloud services like AWS or Azure?",
    type: "single-choice",
    options: ["Yes, AWS", "Yes, Azure", "Both", "No"]
  },
  {
    question: "What is your experience with Agile methodology?",
    type: "single-choice",
    options: ["Scrum", "Kanban", "None", "Other"]
  },
 
]

    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    }
  },
 methods: {
  selectAnswer(option) {
    this.selectedAnswer = option;
    this.saveAnswer(); // Save the answer when an option is selected
  },
  nextQuestion() {
    this.saveAnswer(); // Save the current answer before moving to the next question
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.loadAnswer(); // Load the answer for the next question
    }
  },
  previousQuestion() {
    this.saveAnswer(); // Save the current answer before moving to the previous question
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.loadAnswer(); // Load the answer for the previous question
    }
  },
  saveAnswer() {
    if (this.selectedAnswer !== '') {
      // Save the answer along with the question
      this.answers[this.currentIndex] = {
        question: this.currentQuestion.question,
        answer: this.selectedAnswer
      };
    }
  },
  loadAnswer() {
    // Load the answer from the stored answers if it exists for this question
    const savedAnswer = this.answers[this.currentIndex];
    if (savedAnswer) {
      this.selectedAnswer = savedAnswer.answer;
    } else {
      this.selectedAnswer = ''; // Reset if no answer has been saved yet
    }
  },
  submitAnswers() {
    this.saveAnswer(); // Save the final answer
    console.log("Answers: ", this.answers);
    
    // Send the answers to the backend
    axios.post('http://localhost:5000/submit-answers', {
      answers: this.answers
    })
    .then(response => {
      if(response.data.status == true){
        console.log("Server Response: ", response.data);
        Swal.fire("Answers Submitted!");
      } else {
        Swal.fire("Issue in sending", "Please try again later.", "warning");
      }
    })
    .catch(error => {
      console.error("Error submitting answers: ", error);
      Swal.fire("Error submitting answers.", "Please try again later.", "warning");
    });
  }
},

  watch: {
    currentIndex() {
      this.loadAnswer(); // Load the answer when the current index changes
    }
  }
};
</script>

