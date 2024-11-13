<template>
  <div class="form-container">
    <form @submit.prevent="saveData" class="form">
      <div class="form-group">
        <label>ФИО</label>
        <AppInput v-model="user.name" placeholder="ФИО" required />
      </div>
      <div class="form-group">
        <label>Возраст</label>
        <AppInput
          v-model="user.age"
          type="number"
          placeholder="Возраст"
          required
        />
      </div>

      <h2>Дети (макс. 5)</h2>
      <div class="children-list">
        <div
          v-for="(child, index) in user.children"
          :key="index"
          class="child-form"
        >
          <div class="form-group child-input">
            <label>Имя</label>
            <AppInput v-model="child.name" placeholder="Имя" required />
          </div>
          <div class="form-group child-input">
            <label>Возраст</label>
            <AppInput
              v-model="child.age"
              type="number"
              placeholder="Возраст"
              required
            />
          </div>
          <AppButton theme="danger" type="button" @click="removeChild(index)">
            Удалить
          </AppButton>
        </div>
      </div>

      <AppButton
        theme="secondary"
        type="button"
        @click="addChild"
        :disabled="isMaxChild"
      >
        + Добавить ребенка
      </AppButton>

      <AppButton type="submit" theme="secondary">Сохранить</AppButton>
    </form>
  </div>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
import AppInput from "@/components/AppInput.vue";
import { useUserStore } from "@/stores/users";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = useUserStore();

const addChild = () => {
  user.children = [...user.children, { name: "", age: null }];
};

const removeChild = (index) => {
  user.children = user.children.filter((_, i) => i !== index);
};

const saveData = () => {
  router.push("/preview");
};

const isMaxChild = computed(() => user.children.length === 5);
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
  display: block;
}

h2 {
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 15px;
  text-align: center;
  color: #333;
}

.children-list {
  margin-bottom: 20px;
}

.child-form {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.child-input {
  flex: 1;
}
</style>
