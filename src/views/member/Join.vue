<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded px-8 py-6 mb-4 w-96">
      <h1 class="text-2xl font-bold text-center text-gray-700 mb-4">Join Us</h1>
      <p class="text-center text-gray-600 mb-6">Create your account.</p>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" id="username" v-model="username" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" v-model="email" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" v-model="password" required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div class="flex items-center justify-between">
          <button type="submit" class="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
        </div>
      </form>

      <p class="text-center text-gray-600 mt-4">
        Already have an account? <router-link to="/members/login" class="text-gray-800 font-semibold">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleRegister() {
      // 회원가입 처리 로직
      console.log('Registering with:', this.username, this.email, this.password);
      // 여기에 회원가입 API 호출 등을 추가
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요하다면 여기에 작성 */
</style>
