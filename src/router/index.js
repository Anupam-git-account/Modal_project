import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import NextPage from '../components/NextPage.vue';
import QuestionPage from '../components/QuestionPage.vue';
import InformationPage from '../components/InformationPage.vue';  // Import InformationPage component

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/next', name: 'NextPage', component: NextPage },
  { path: '/question-page', name: 'QuestionPage', component: QuestionPage },
  { path: '/information', name: 'InformationPage', component: InformationPage } // Add route for InformationPage
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
