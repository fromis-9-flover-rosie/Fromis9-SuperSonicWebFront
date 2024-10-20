<template>
    <div>
      <h1 class="text-2xl font-bold text-center text-gray-700 mb-4">Login</h1>
      <p class="text-center text-gray-600 mb-6">Login to your account.</p>
  
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" id="username" v-model="username" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
  
        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
  
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        // 로그인 처리 로직
        this.$emit('login', { username: this.username, password: this.password });
      },
    },
  };
  </script>
  
  <style scoped>
  /* 추가적인 스타일이 필요하다면 여기에 작성 */
  </style>
  