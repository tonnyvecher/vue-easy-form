<template>
  <div class="preview-container">
    <div class="user-info">
      <strong>{{ user.name }}, {{ user.age }} лет</strong>
    </div>

    <h2>Дети</h2>
    <div v-if="user.children.length" class="children-list">
      <div
        v-for="(child, index) in user.children"
        :key="index"
        class="child-info"
      >
        <strong>{{ child.name }}, {{ child.age }} лет</strong>
      </div>
    </div>
    <div v-else>Нет данных о детях</div>
    <AppButton @click="goBack" theme="secondary">Назад</AppButton>
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import { useUserStore } from "@/stores/users";
import { useRouter } from "vue-router";

const router = useRouter();
const user = useUserStore();

const goBack = () => {
  router.push("/");
};
</script>

<style scoped>
.preview-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

.user-info {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #333;
}

.children-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.child-info {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>
