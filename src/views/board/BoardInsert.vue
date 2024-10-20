<template>
  <div>
    <BoardInsert :initialFrom="initialFrom" @submit="submitForm" />
  </div>
</template>

<script>
import BoardInsert from "@/components/board/BoardInsert.vue";
import { mapActions } from 'vuex';

export default {
  components: {
    BoardInsert,
  },

  data() {
    return {
      initialForm: {
        title: '',
        content: '',
        author: '',
      },
    };
  },
  methods: {
    ...mapActions(['createBoard']),
    submitForm(form) {
      this.createBoard(form)
        .then(() => {
          this.$router.push({ name: 'BoardList' });
        })
        .catch(error => {
          console.error('Error creating board:', error);
          alert('게시물 등록에 실패했습니다. 다시 시도해 주세요.');
        });
    },
  },
};
</script>