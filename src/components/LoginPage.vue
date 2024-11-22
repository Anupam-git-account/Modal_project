<template>
  <div class="complete">
    <div class="container">
      <div class="logo-container">
       
        <h2 class="heading">Sign in to your account</h2>
      </div>

      <div class="form-container">
        <form @submit.prevent="handleSubmit" class="form">
          <div class="form-group">
              <div class="label-container">
            <label for="email" class="label">Email address</label>
              </div>
            <input 
              id="email" 
              v-model="email" 
              type="email" 
              autocomplete="email" 
              required 
              class="input"
            />
          </div>

          <div class="form-group">
            <div class="label-container">
              <label for="password" class="label">Password</label>
            </div>
            <input 
              id="password" 
              v-model="password" 
              type="password" 
              autocomplete="current-password" 
              required 
              class="input"
            />
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>

          <div class="button-container">
            <button 
              type="submit" 
              class="submit-button"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="footer-text">
          Not a member?
          <a href="#" class="signup-link">Create Account</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Check if email and password are 'test'
      if (this.email === 'test@gmail.com' && this.password === 'test') {
        // Navigate to InformationPage if credentials match
        localStorage.setItem('username', 'test');
        this.$router.push({ name: 'InformationPage' });
      } else {
        // Optionally, alert the user that the credentials are incorrect
        alert('Incorrect email or password');
      }
    }
  }
};
</script>
<style scoped>
.complete{
  background-color: #544ade;
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #544ade;
  width: 100%;;
}

.logo-container {
  text-align: center;
}

.logo {
  height: 50px;
  margin-bottom: 20px;
}

.heading {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.form-container {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0%;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.label-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.forgot-link {
  font-size: 12px;
  color: #4f46e5;
  text-decoration: none;
  text-align:left;
}

.forgot-link:hover {
  text-decoration: underline;
}

.input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

.input:focus {
  border-color: #4f46e5;
  outline: none;
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
}

.button-container {
  margin-top: 16px;
  text-align: center;
}

.submit-button {
  width: 7%;
  padding: 8px;
  background-color: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center !important;
  white-space: nowrap;
  bottom: 300px;
  left: 1000px;

}

.submit-button:hover {
  background-color: #4338ca;
}

.footer-text {
  /* margin-top: 20px; */
  font-size: 14px;
  color: #666;
  text-align: center;
}

.signup-link {
  color: #4f46e5;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}
</style>
