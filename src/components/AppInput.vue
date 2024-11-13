<template>
  <input class="app-input" :type="type || 'text'" v-model="model" />
</template>
<script setup>
defineProps(["type"]);

const model = defineModel();
</script>
<style scoped>
.app-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}
</style>
