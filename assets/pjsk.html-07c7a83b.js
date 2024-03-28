import{_ as a,o as n,c as s,f as p,e}from"./app-51402ee0.js";const t="/images/pjsk/pjsk233.webp",c="/images/pjsk/pjsk123.webp",o={},l=e(`<h1 id="pjsk-表情包生成器" tabindex="-1"><a class="header-anchor" href="#pjsk-表情包生成器" aria-hidden="true">#</a> pjsk 表情包生成器</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>本功能提供了 pjsk 表情包制作的功能</p><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><h3 id="交互模式" tabindex="-1"><a class="header-anchor" href="#交互模式" aria-hidden="true">#</a> 交互模式</h3><ul><li><p>指令： <code>/pjsk</code></p></li><li><p>详情：</p><p>进入交互制作表情包模式</p></li></ul><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式" aria-hidden="true">#</a> 命令模式</h3><ul><li>帮助菜单： <code>/pjsk -h</code></li></ul><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>用法: /pjsk <span class="token punctuation">[</span>-i ID<span class="token punctuation">]</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>-x X<span class="token punctuation">]</span> <span class="token punctuation">[</span>-y Y<span class="token punctuation">]</span> <span class="token punctuation">[</span>-r ROTATE<span class="token punctuation">]</span> <span class="token punctuation">[</span>-s SIZE<span class="token punctuation">]</span> <span class="token punctuation">[</span>-c FONT_COLOR<span class="token punctuation">]</span>
            <span class="token punctuation">[</span>-W STROKE_WIDTH<span class="token punctuation">]</span> <span class="token punctuation">[</span>-C STROKE_COLOR<span class="token punctuation">]</span> <span class="token punctuation">[</span>-S LINE_SPACING<span class="token punctuation">]</span>
            <span class="token punctuation">[</span>text <span class="token punctuation">..</span>.<span class="token punctuation">]</span>

位置参数:
  text                  所添加的文字，为空时使用默认值

可选参数:
  <span class="token parameter variable">-i</span> ID, <span class="token parameter variable">--id</span> ID        表情 ID，可通过指令 <span class="token variable"><span class="token variable">\`</span>/pjsk列表<span class="token variable">\`</span></span> 查询，不提供时则随机选择
  -h, <span class="token parameter variable">--help</span>            显示帮助菜单
  <span class="token parameter variable">-x</span> X                  文字的中心 x 坐标
  <span class="token parameter variable">-y</span> Y                  文字的中心 y 坐标
  <span class="token parameter variable">-r</span> ROTATE, <span class="token parameter variable">--rotate</span> ROTATE
                        文字旋转的角度
  <span class="token parameter variable">-s</span> SIZE, <span class="token parameter variable">--size</span> SIZE  文字的大小，不指定时会以默认大小为最大值自动调整
  <span class="token parameter variable">-c</span> FONT_COLOR, --font-color FONT_COLOR
                        文字颜色，使用十六进制格式
  <span class="token parameter variable">-W</span> STROKE_WIDTH, --stroke-width STROKE_WIDTH
                        文本描边宽度
  <span class="token parameter variable">-C</span> STROKE_COLOR, --stroke-color STROKE_COLOR
                        文本描边颜色，使用十六进制格式
  <span class="token parameter variable">-S</span> LINE_SPACING, --line-spacing LINE_SPACING
                        文本行间距

Tips:

- 大部分有默认值的数值参数都可以用 ^ 开头指定相对于默认值的偏移量
- 不提供任何指令参数时会进入交互创建模式
</code></pre></div><ul><li>使用示例： <ul><li><p>/pjsk 香草泥 -i 233</p><p><img src="`+t+'" alt="233"></p></li><li><p>/pjsk 我怎么有十根手指 -i 123</p><p><img src="'+c+'" alt="123"></p></li></ul></li></ul>',10);function i(r,u){return n(),s("div",null,[l,p(" :::warning\nQQ 平台因未知原因，发送 png 图片均会转换成 jpg 图片而丢失透明层，如需获得最佳体验请移步 `KOOK` 或 `QQ频道`\n::: ")])}const d=a(o,[["render",i],["__file","pjsk.html.vue"]]);export{d as default};
