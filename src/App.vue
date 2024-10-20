<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <!-- 상단 메뉴 -->
    <header class="bg-gray-800 shadow">
      <AppMenu />
    </header>

    <!-- 메인 콘텐츠 -->
    <main class="container mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppMenu from './components/menu/AppMenu.vue'; // 변경된 경로
export default {
  components: {
    AppMenu,
  },
}
</script>

<style scoped>
/* 추가적인 스타일이 필요하다면 여기에 작성 */
</style>
