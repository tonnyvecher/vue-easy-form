<template>
  <button
    class="app-button"
    :class="{
      'app-button--secondary': theme === 'secondary',
      'app-button--danger': theme === 'danger',
    }"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps(["theme"]);
</script>
<style scoped>
.app-button {
  background-color: blue;
  color: white;
}
.app-button--secondary {
  background-color: #007bff;
  color: #fff;
  padding: 8px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
.app-button--secondary:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
.app-button--secondary:hover:not(:disabled) {
  background-color: #0056b3;
}

.app-button--danger {
  border-radius: 5px;
  transition: background-color 0.2s;
  color: #000000;
  background: none;
  border-radius: 1px solid black;
  cursor: pointer;
  padding: 5px;
  margin: 20px;
  font-size: 0.9rem;
}
.app-button--danger:hover {
  background-color: #ee1919;
  color: white;
  border-radius: 1px solid red;
}
</style>
