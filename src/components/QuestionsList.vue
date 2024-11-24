<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <header class="flex flex-col md:flex-row items-center justify-between p-4 shadow-md bg-grey fixed top-0 left-0 w-full z-10">
  <div class="w-full md:w-auto mb-2 md:mb-0">
    <h6 class="text-sm font-semibold text-center md:text-left">
      Section 1, Module 1: Reading and Writing
    </h6>
    <button 
      @click="toggleDirections" 
      class="text-xs px-2 py-0.5 border rounded-full hover:bg-gray-100 transition mt-1">
      {{ showDirections ? ' Directions' : ' Directions' }}
    </button>
  </div>
  
  <div class="flex items-center justify-center flex-grow mt-4 md:mt-0 order-3 md:order-none w-full md:w-auto">
    <div class="flex flex-col items-center space-y-2">
      <div v-if="showTimer" class="text-blue-600 font-semibold text-sm">
        {{ timer }}
      </div>
      <span v-else class="text-blue-600 text-xl"> <span class="pi pi-clock text-sm"></span></span>
      <button 
        @click="toggleTimer" 
        class="text-xs px-1 py-0.5 border rounded-full hover:bg-gray-100 transition mt-1">
        {{ showTimer ? 'Hide Timer' : 'Show Timer' }}
      </button>
    </div>
  </div>

  <div class="flex items-center space-x-4 flex-shrink-0 w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
    <div class="flex flex-col items-center">
      <span class="pi pi-pen-to-square text-sm"></span>
      <span class="text-xs mt-1 text-gray-700">Highlights and Notes</span>
    </div>

    <div class="flex flex-col items-center">
      <span class="pi pi-ellipsis-v text-sm"></span>
      <span class="text-xs mt-1 text-gray-700">More</span>
    </div>
  </div>

  
</header>


<div 
  class="w-full bg-blue-900 h-7 rounded-b-lg flex items-center justify-center text-white"
  style=" position:fixed; top: 85px; left: 50%; transform: translateX(-50%); width: 90%; z-index: 20; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">
  This is Test Application
</div>

    <!-- Directions Container -->
    <div 
      v-if="showDirections" 
      class="absolute top-40 left-1/2 transform -translate-x-1/2 mt-0 bg-white w-11/12 md:w-auto max-w-2xl p-6 rounded-lg shadow-lg z-50 border border-gray-300 max-h-screen overflow-auto">
      <button 
        @click="toggleDirections" 
        class="absolute top-3 right-3 text-xl text-gray-600 hover:text-gray-800">
        &times;
      </button>
      <h3 class="text-lg font-semibold mb-4">Directions</h3>
      <p class="text-sm text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis ut nostrum assumenda doloribus, esse ipsum? Impedit id velit error distinctio? Minima deserunt possimus, earum inventore consequuntur reprehenderit dignissimos? Ut sunt sit, ipsa earum perspiciatis labore nobis alias doloremque possimus ullam.
      </p>
    </div>

    <!-- Main Content -->
    <main class="flex flex-1 flex-col lg:flex-row p-4 gap-2 mt-24 mb-24 overflow-y-auto">
      <!-- Text Section -->
      <section class="bg-white shadow-md p-6 flex-1 rounded-md relative">
        <button 
          class="absolute right-2 text-gray-500 hover:text-gray-700 focus:outline-none rounded-full p-2 border bg-white flex items-center justify-center">
          <span class="pi pi-arrow-up-right text-sm"></span>
        </button>
        <br><br/>
        <p class="text-gray-700 leading-relaxed text-left">
         Once upon a time, in a small village nestled between
          rolling hills, there lived a young girl named Ella. 
          She was known for her curiosity and her love for exploring
           the forests that surrounded her home. One sunny afternoon, 
           while wandering deeper into the woods than ever before, 
           Ella stumbled upon an ancient oak tree with a hollow 
           large enough for her to crawl inside. Intrigued, 
           she ventured in, and to her surprise, found a hidden
            door at the back of the hollow. The door was old, with 
            carvings of mythical creatures etched into the wood. With a mix of 
            excitement and hesitation, Ella pushed the door open and stepped 
            into a world she had only ever dreamed of—a land full of magical creatures, 
            enchanted forests, and secrets waiting to be discovered. Her adventure was just beginning.

        </p>
      </section>

      <!-- Question Section -->
     <section class="bg-white shadow-md p-4 flex-1 rounded-md relative"> <!-- Reduced padding -->
  <div class="flex justify-between items-center mb-2"> <!-- Reduced margin -->
    <div class="flex items-center">
      <div class="text-base font-bold text-gray-700 mr-1"> <!-- Smaller font size -->
        {{ currentQuestionNumber }}.
      </div>
      <div class="flex items-center">
        <pi-bookmark class="text-gray-500 mr-1" size="1.2em" /> <!-- Smaller icon -->
        <input 
          type="checkbox" 
          id="mark-review" 
          v-model="markForReview"
          class="hidden"
        />
        <label 
          for="mark-review" 
          class="text-xs font-semibold text-gray-700 cursor-pointer flex items-center"> <!-- Smaller text -->
          <span :class="{ 'text-blue-700': markForReview }">Mark for Review</span>
        </label>
      </div>
    </div>
  </div>

  <p class="mb-4 text-gray-800 font-medium text-base leading-snug"> <!-- Smaller font size -->
    Which choice completes the text with the most logical and precise word or phrase?
  </p>

  <ul class="space-y-3"> <!-- Reduced vertical spacing -->
    <li 
      v-for="(option, index) in options" 
      :key="index" 
      class="flex items-center border rounded-md p-3 hover:bg-gray-100 cursor-pointer"> <!-- Reduced padding -->
      
      <!-- Display circle with conditional background color based on selection -->
      <div 
        class="flex items-center justify-center w-6 h-6 rounded-full font-semibold text-gray-700 mr-3" 
        :class="{
          'bg-blue-900 text-white': selectedOption === option,  // When selected, apply blue background
          'bg-gray-200': selectedOption !== option  // When not selected, apply gray background
        }">
        {{ String.fromCharCode(65 + index) }}
      </div>
      
      <!-- Hidden radio input -->
      <input
        type="radio"
        :id="'option' + (index + 1)"
        name="answer"
        :value="option"
        v-model="selectedOption"
        class="hidden"
      />
      
      <!-- Label -->
      <label 
        :for="'option' + (index + 1)" 
        class="text-gray-700 text-sm cursor-pointer"> <!-- Reduced text size -->
        {{ option }}
      </label>
    </li>
  </ul>

</section>

    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 shadow-md p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 fixed bottom-0 left-0 w-full z-10">
      <div class="flex items-center">
        <span class="text-sm font-semibold text-gray-700">
          User: <span class="text-blue-600">{{ userName }}</span>
        </span>
      </div>

      <div class="flex justify-center items-center">
        <span 
          @click="toggleQuestionNavigation" 
          class="text-sm font-semibold text-gray-700 cursor-pointer hover:underline">
          Question: <span class="text-blue-600">{{ currentQuestion }} of {{ totalQuestions }}</span>
        </span>
      </div>

      <div class="flex space-x-4 justify-center md:justify-end">
        <button 
          @click="closeQuiz" 
          class="px-5 py-2 border rounded-md text-gray-700 hover:bg-gray-200 transition">
          Close
        </button>
        <button 
          @click="nextQuestion" 
          class="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Next
        </button>
      </div>

     <div 
  v-if="showQuestionNavigation" 
  class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-3/4 bg-white p-4 border-t shadow-lg z-50 flex flex-col items-center">
  
  <!-- Close Button -->
  <button 
    @click="toggleQuestionNavigation" 
    class="absolute top-3 right-3 text-xl text-gray-600 hover:text-gray-800">
    &times;
  </button>

  <!-- Section Title -->
  <h6 class="text-center font-semibold mb-4">Section 1, Module 1: Reading and Writing Questions</h6>
  
  <!-- Icons with border up and down -->
  <div class="flex gap-4 justify-center border-t border-b pt-2 pb-2 mb-4">
    <i class="pi pi-map-marker border-x px-4"> Current</i>
    <i class="pi pi-expand border-x px-4"> Unanswered</i>
    <span class="pi pi-bookmark-fill border-x px-4"> For Review</span>
  </div>
  
  <!-- Numbered buttons -->
  <div class="flex flex-wrap gap-2 justify-center">
    <button
      v-for="i in totalQuestions"
      :key="i"
      @click="selectQuestion(i)"
      :class="{
        'bg-blue-600 text-white': answeredQuestions.includes(i),
        'bg-gray-200 text-gray-600': !answeredQuestions.includes(i),
      }"
      class="w-10 h-10 flex items-center justify-center rounded-md border hover:bg-gray-300 transition"
    >
      {{ i }}
    </button>
  </div>
</div>


    </footer>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'
export default {
  data() {
    return {
      showDirections: false,
      showTimer: true,
      timer: '02:30:00',
      currentQuestion: 1,
      totalQuestions: 20,
  selectedOption: null,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
      userName: 'John Doe',
      currentQuestionNumber: 1,
      markForReview: false,
      answeredQuestions: [],
      showQuestionNavigation: false,
    };
  },
  methods: {
    toggleDirections() {
      this.showDirections = !this.showDirections;
    },
    toggleTimer() {
      this.showTimer = !this.showTimer;
    },
    nextQuestion() {
      if (this.currentQuestion < this.totalQuestions) {
        this.currentQuestion++;
      }
    },
    closeQuiz() {
      console.log('Closing quiz');
    },
    selectQuestion(questionNumber) {
      this.currentQuestion = questionNumber;
    },
    toggleQuestionNavigation() {
      this.showQuestionNavigation = !this.showQuestionNavigation;
    }
  }
};
</script>

<style scoped>
/* Optional custom styles can be added here */
</style>
