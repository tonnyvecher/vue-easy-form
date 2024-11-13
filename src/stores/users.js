import { defineStore } from "pinia";
import { reactive } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = reactive({
    name: "",
    age: null,
    children: [],
  });
  return user;
});
