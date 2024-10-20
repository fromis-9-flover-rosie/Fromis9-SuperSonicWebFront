<template>
    <div class="home-content">
      <h1>Home Page</h1>
      <p>Welcome to the home page of your Vue.js application.</p>
      <button @click="goToAbout" class="cta-button">Learn More</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeContent',
    methods: {
      goToAbout() {
        this.$router.push({ name: 'About' }); // About 페이지로 이동
      },
    },
  };
  </script>
  
  <style scoped>
  .home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* 전체 화면 높이 */
    background-color: #f9f9f9; /* 배경색 */
    text-align: center;
  }
  
  h1 {
    color: #42b983;
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2em;
    color: #333; /* 텍스트 색상 */
    margin-bottom: 30px;
    max-width: 600px; /* 텍스트 너비 제한 */
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 1.2em;
    color: white;
    background-color: #42b983; /* 버튼 색상 */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background-color: #36a372; /* 버튼 호버 효과 */
  }
  </style>
  