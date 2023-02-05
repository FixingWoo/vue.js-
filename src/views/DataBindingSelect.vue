<template>
  <div>
    <select v-model="city">
      <option value="032">인천</option>
      <option value="02">서울</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      city: "032",
    };
  },
};
</script>
