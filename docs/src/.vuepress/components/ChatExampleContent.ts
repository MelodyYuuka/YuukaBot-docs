import { defineComponent, h } from "vue";
import type { PropType, VNodeChild } from "vue";
import { withBase } from "vuepress/client";
import type { ChatExampleNode } from "./chat-examples.js";

function renderNode(node: ChatExampleNode): VNodeChild {
  switch (node.type) {
    case "text":
      return node.text;
    case "command":
      // 真实消息里的内联查询入口；这里只展示外观，不执行命令。
      return h("span", { class: "chat-example__inline-command" }, node.text);
    case "image":
      return h("img", {
        class: "chat-example__image",
        src: withBase(node.src),
        alt: node.alt,
        width: node.width,
        height: node.height,
        style: { width: `${node.width}px`, aspectRatio: `${node.width} / ${node.height}` },
      });
    case "break":
      return h("br");
    case "element":
      return h(node.tag, node.children.map(renderNode));
  }
}

export default defineComponent({
  name: "ChatExampleContent",
  props: {
    nodes: { type: Array as PropType<ChatExampleNode[]>, required: true },
  },
  setup: (props) => () =>
    h("div", { class: "chat-example__content" }, props.nodes.map(renderNode)),
});
