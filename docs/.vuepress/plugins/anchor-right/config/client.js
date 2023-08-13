import { defineClientConfig } from "@vuepress/client";
import { watch, createApp, getCurrentInstance, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import AnchorRight from "./components/anchor-right/index.vue";

export default defineClientConfig({
  setup() {
    const mountAnchorRight = () => {
      try {
        const ctx = document.querySelector(".theme-default-content");
        // 移除旧节点
        const anchorRightEls = ctx.querySelectorAll(".anchor-right");
        anchorRightEls.forEach((item) => {
          ctx.removeChild(item);
        });

        // 添加新节点
        const anchorRight = document.createElement("div");
        anchorRight.className = "anchor-right";
        ctx.insertBefore(anchorRight, ctx.firstChild);

        const app = createApp(AnchorRight);
        app.provide("route", route);
        app.provide("router", router);
        app.mount(anchorRight);
      } catch (error) {}
    };
    const route = useRoute();
    const router = useRouter();
    onMounted(() => {
      setTimeout(() => {
        mountAnchorRight();
      }, 300);
    });

    // 监听切换左侧一级标题切换，将右侧小菜单挂载到当前页面上
    // 因为不是主题  所以如果小标题不采用fixted 只能作为全局组件挂载方式
    watch(
      () => route.path,
      (oldVal, newVal) => {
        if (oldVal !== newVal) {
          setTimeout(() => {
            // 路由切换加动画了 导致不能及时获取最新page的anchor-right元素 故而加一个定时器
            mountAnchorRight();
          }, 300);
        }
      },
      {
        immediate: true,
      }
    );
  },
});
