<template>
  <div class="home">
    <HomeContent />
  </div>
</template>

<script>
import HomeContent from '@/components/home/AppHome.vue'; // 대문자로 수정


export default {
  name: 'HomePage',
  components: {
    HomeContent, // 컴포넌트 등록
  },
};
</script>

<style scoped>
/* 홈 페이지에 대한 추가 스타일이 필요하다면 여기에 작성 */
</style>
