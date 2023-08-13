<script setup>
import { ref, onMounted, inject } from "vue";
import { usePageData } from "@vuepress/client";
import SubMenu from "./sub-menu.vue";

const headers = ref([]);
const router = inject('router');
const route = inject('route');

const headerClick = (item) => {
  router.push(`#${item.slug}`);
};

onMounted(() => {
  const page = usePageData();
  headers.value = page.value.headers;
});
</script>
<template>
  <div class="anchor-right-content">
    <ul>
      <template v-for="(item, index) in headers" :key="index">
        <template v-if="item.children.length > 0">
          <sub-menu :key="item.key" :menu-info="item" />
        </template>
        <template v-else>
          <li
            @click="headerClick(item)"
            :class="['level', 'level-'+item.level, { active: route.hash === `#${item.slug}` }]"
          >
            {{ item.title }}
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>
<style lang="scss">
@import "./style.scss";
</style>
