<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "텍스트 에어리어에 입력할 데이터입니다.",
    };
  },
};
</script>
