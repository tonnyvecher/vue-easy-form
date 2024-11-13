import { createRouter, createWebHistory } from "vue-router";
import FormPage from "./views/FormPage.vue";
import PreviewPage from "./views/PreviewPage.vue";

const routes = [
  { path: "/", name: "Form", component: FormPage },
  { path: "/preview", name: "Preview", component: PreviewPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
