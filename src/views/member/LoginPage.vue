<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded px-8 py-6 mb-4 w-96">
      <LoginForm @login="handleLogin" />
      <p class="text-center text-gray-600 mt-4">
        Don't have an account? <router-link to="/members/join" class="text-gray-800 font-semibold">Join now</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/member/LoginForm.vue'; // 경로를 적절히 수정하세요

export default {
  name: 'LoginPage',
  components: {
    LoginForm,
  },
  methods: {
    handleLogin(credentials) {
      console.log('Logging in with:', credentials.username, credentials.password);
      // 여기에 로그인 API 호출 등을 추가
    },
  },
};
</script>

<style scoped>
/* 추가적인 스타일이 필요하다면 여기에 작성 */
</style>
