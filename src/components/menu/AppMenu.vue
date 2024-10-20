<template>
  <nav class="bg-gray-800 shadow">
    <div class="container mx-auto flex justify-between items-center p-4">
      <div class="text-xl font-bold text-white">
        <router-link to="/">API Test</router-link>
      </div>

      <ul class="flex space-x-6">
        <li><router-link to="/" class="text-gray-300 hover:text-white transition">Home</router-link></li>
        <li><router-link to="/products" class="text-gray-300 hover:text-white transition">Product</router-link></li>
        <li><router-link to="/boards" class="text-gray-300 hover:text-white transition">Board</router-link></li>
        <li><router-link to="/qnas" class="text-gray-300 hover:text-white transition">Qna</router-link></li>
        <li><router-link to="/datarooms" class="text-gray-300 hover:text-white transition">Data</router-link></li>
        <li><router-link to="/contact" class="text-gray-300 hover:text-white transition">Contact</router-link></li>
      </ul>

      <ul class="flex space-x-4">
        <template v-if="!isLoggedIn">
          <li><router-link to="/members/login" class="text-gray-300 hover:text-white transition">Login</router-link></li>
          <li><router-link to="/members/join" class="text-gray-300 hover:text-white transition">Join</router-link></li>
        </template>
        <template v-else>
          <li><router-link :to="{ name: 'MyPage', params: { id: userId } }" class="text-gray-300 hover:text-white transition">MyPage</router-link></li>
          <li><a @click.prevent="logout" class="text-gray-300 hover:text-white transition">Logout</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppMenu',
  computed: {
    ...mapState(['member']),
    isLoggedIn() {
      return !!this.member;
    },
    userId() {
      return this.member?.id || '';
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'Login' });
      });
    }
  }
}
</script>

<style scoped>
/* 추가적인 스타일이 필요하다면 여기에 작성 */
</style>
