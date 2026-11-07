<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vuepress/client";
import { chatExamples } from "./chat-examples.js";
import ChatExampleContent from "./ChatExampleContent.js";
import type { ChatExampleDefinition, ChatExampleName } from "./chat-examples.js";

const props = defineProps<{ example: ChatExampleName }>();
const definition = computed<ChatExampleDefinition>(() => chatExamples[props.example]);
// 完整展示预设对话，静态构建和禁用 JavaScript 时也能阅读示例。
// 只渲染预设指令和回复，不接收输入，也不追加聊天记录。
const avatar = withBase("/images/avatar/yuyuko.webp");
</script>

<template>
  <section class="chat-example" :aria-label="definition.title + '对话示例'">
    <ol class="chat-example__transcript" aria-label="示例聊天记录" tabindex="0">
      <li v-for="(step, stepIndex) in definition.steps" :key="stepIndex" class="chat-example__step">
        <div class="chat-example__message chat-example__message--user" aria-label="你的消息">
          <span class="chat-example__avatar chat-example__avatar--user" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22"><circle cx="12" cy="8" r="4" fill="currentColor" /><path d="M4 22v-2a8 8 0 0 1 16 0v2Z" fill="currentColor" /></svg>
          </span>
          <div class="chat-example__bubble chat-example__bubble--user">{{ step.command }}</div>
        </div>
        <div v-for="(reply, replyIndex) in step.replies" :key="replyIndex" class="chat-example__message" aria-label="幽幽子的回复">
          <img class="chat-example__avatar" :src="avatar" alt="" width="36" height="36" />
          <div class="chat-example__bubble">
            <ChatExampleContent :nodes="reply.content" />
            <div v-if="reply.actions" class="chat-example__actions">
              <div v-for="(row, rowIndex) in reply.actions" :key="rowIndex" class="chat-example__action-row">
                <span v-for="(label, actionIndex) in row" :key="actionIndex" class="chat-example__action">{{ label }}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.chat-example {
  max-width: 42rem;
  margin: 1.25rem auto 1.75rem;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text);
}

.chat-example__avatar {
  display: block;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.chat-example__transcript {
  box-sizing: border-box;
  height: 420px;
  margin: 0;
  padding: 20px 18px;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  background: color-mix(in srgb, var(--vp-c-bg-elv) 94%, var(--vp-c-text) 6%);
  list-style: none;
}

.chat-example__step {
  margin: 0;
  padding: 0;
  list-style: none;
}

.chat-example__step + .chat-example__step {
  margin-top: 22px;
}

.chat-example__message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 14px 0 0;
}

.chat-example__message:first-child {
  margin-top: 0;
}

.chat-example__message--user {
  flex-direction: row-reverse;
}

.chat-example__avatar--user {
  display: grid;
  place-items: center;
  background: #56a9cf;
  color: #fff;
}

.chat-example__bubble {
  position: relative;
  box-sizing: border-box;
  max-width: calc(100% - 46px);
  padding: 11px 14px;
  border-radius: 4px 12px 12px;
  background: var(--vp-c-bg-elv);
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
  font-size: 0.9rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.chat-example__bubble--user {
  border-radius: 12px 4px 12px 12px;
  background: var(--vp-c-accent-soft);
  white-space: pre-wrap;
}

.chat-example__bubble :deep(.chat-example__content h3) {
  margin: 0 0 8px;
  padding: 0;
  border: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.chat-example__bubble :deep(.chat-example__content p) {
  margin: 8px 0;
}

.chat-example__bubble :deep(.chat-example__content > :first-child) {
  margin-top: 0;
}

.chat-example__bubble :deep(.chat-example__content > :last-child) {
  margin-bottom: 0;
}

.chat-example__bubble :deep(.chat-example__content blockquote) {
  margin: 8px 0;
  padding: 0 0 0 10px;
  border-inline-start: 3px solid var(--vp-c-divider);
  color: var(--vp-c-text-mute);
}

.chat-example__bubble :deep(.chat-example__content blockquote p) {
  margin: 0;
}

.chat-example__bubble :deep(.chat-example__content ul) {
  margin: 8px 0;
  padding-inline-start: 1.25em;
  list-style: disc;
}

.chat-example__bubble :deep(.chat-example__content li) {
  margin: 0;
  padding: 0;
}

.chat-example__bubble :deep(.chat-example__content li p) {
  margin: 0;
}

.chat-example__bubble :deep(.chat-example__inline-command) {
  color: var(--vp-c-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.chat-example__bubble :deep(.chat-example__image) {
  display: inline-block;
  max-width: 100%;
  height: auto;
  vertical-align: top;
}

.chat-example__actions {
  display: grid;
  gap: 6px;
  margin-top: 12px;
}

.chat-example__action-row {
  display: flex;
  gap: 6px;
}

.chat-example__action {
  flex: 1;
  min-width: 0;
  padding: 5px 9px;
  border: 1px solid var(--vp-c-accent);
  border-radius: 4px;
  background: transparent;
  color: var(--vp-c-accent);
  font: inherit;
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
}

.chat-example__transcript:focus-visible {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: -2px;
}

@media (max-width: 430px) {
  .chat-example__transcript {
    height: 430px;
    padding: 16px 10px;
  }

  .chat-example__message {
    gap: 8px;
  }

  .chat-example__bubble {
    max-width: calc(100% - 44px);
    padding: 10px;
  }
}
</style>
