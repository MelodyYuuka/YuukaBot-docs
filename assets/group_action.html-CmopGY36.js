import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as n,b as l,d as o,e,f as u,r,o as a}from"./app-BhvRMwO1.js";const m={},g={id:"禁言",tabindex:"-1"},Q={class:"header-anchor",href:"#禁言"},y={id:"解禁",tabindex:"-1"},x={class:"header-anchor",href:"#解禁"};function f(b,t){const i=r("Badge"),d=r("RouteLink");return a(),s("div",null,[t[27]||(t[27]=n('<h1 id="群管理操作" tabindex="-1"><a class="header-anchor" href="#群管理操作"><span>群管理操作</span></a></h1><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>本功能暂时仅支持 QQ 第三方野生 Bot，后续可能会适配其他平台</p><p>对于 <code>QQ 官方</code> 腾讯方面没有给出群权限事务的判断，暂时无法适配</p></div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>本功能用于方便各群进行管理操作</p><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h2>',5)),l("h3",g,[l("a",Q,[l("span",null,[t[0]||(t[0]=o("/禁言 ")),e(i,{type:"tip",text:"群管或群主",vertical:"top"})])])]),l("ul",null,[t[11]||(t[11]=l("li",null,[l("p",null,[o("指令： "),l("code",null,"/禁言[用户] [时间]")])],-1)),t[12]||(t[12]=l("li",null,[l("p",null,[o("别名： "),l("code",null,".mute"),o("、"),l("code",null,"/mute")])],-1)),l("li",null,[t[10]||(t[10]=l("p",null,"参数：",-1)),l("ul",null,[l("li",null,[t[2]||(t[2]=l("code",null,"用户",-1)),t[3]||(t[3]=o("： 支持")),e(d,{to:"/about/glossary.html#%E8%89%BE%E7%89%B9"},{default:u(()=>t[1]||(t[1]=[l("strong",null,"艾特",-1)])),_:1}),t[4]||(t[4]=o("与")),t[5]||(t[5]=l("strong",null,"QQ号",-1)),t[6]||(t[6]=o("，支持")),t[7]||(t[7]=l("strong",null,"多个用户",-1)),t[8]||(t[8]=o("，艾特之间无需分隔，各QQ号之间用空格分隔"))]),t[9]||(t[9]=l("li",null,[l("code",null,"时间"),o("： 形如 1d2h3m4s 的格式")],-1))])]),t[13]||(t[13]=n("<li><p>详情：</p><p>禁言用户</p></li><li><p>使用示例：</p><ul><li><code>/禁言@xxx@yyy 1d</code>: 禁言 <code>xxx</code> 和 <code>yyy</code> 一天</li><li><code>/禁言12345 67890 1d2h3m4s</code>: 禁言 QQ号 为 <code>12345</code> 和 <code>67890</code> 的两位 一天两小时三分钟四秒</li><li><code>/禁言@abc 1m</code>: 禁言 <code>abc</code> 一分钟</li></ul></li>",2))]),t[28]||(t[28]=l("div",{class:"hint-container tip"},[l("p",{class:"hint-container-title"},"提示"),l("p",null,"对于禁言秒数：QQ 所显示禁言时间仅会精确到分钟，但实际上是正确的时间")],-1)),l("h3",y,[l("a",x,[l("span",null,[t[14]||(t[14]=o("/解禁 ")),e(i,{type:"tip",text:"群管或群主",vertical:"top"})])])]),l("ul",null,[t[24]||(t[24]=l("li",null,[l("p",null,[o("指令： "),l("code",null,"/解禁[用户]")])],-1)),t[25]||(t[25]=l("li",null,[l("p",null,[o("别名： "),l("code",null,".unmute"),o("、"),l("code",null,"/unmute")])],-1)),l("li",null,[t[23]||(t[23]=l("p",null,"参数：",-1)),l("ul",null,[l("li",null,[t[16]||(t[16]=l("code",null,"用户",-1)),t[17]||(t[17]=o("： 支持")),e(d,{to:"/about/glossary.html#%E8%89%BE%E7%89%B9"},{default:u(()=>t[15]||(t[15]=[l("strong",null,"艾特",-1)])),_:1}),t[18]||(t[18]=o("与")),t[19]||(t[19]=l("strong",null,"QQ号",-1)),t[20]||(t[20]=o("，支持")),t[21]||(t[21]=l("strong",null,"多个用户",-1)),t[22]||(t[22]=o("，艾特之间无需分隔，各QQ号之间用空格分隔"))])])]),t[26]||(t[26]=n("<li><p>详情：</p><p>解禁用户</p></li><li><p>使用示例：</p><ul><li><code>/解禁@xxx@yyy</code>: 解禁 <code>xxx</code> 和 <code>yyy</code></li><li><code>/解禁12345 67890</code>: 解禁 QQ号 为 <code>12345</code> 和 <code>67890</code> 的两位</li></ul></li>",2))])])}const B=p(m,[["render",f],["__file","group_action.html.vue"]]),c=JSON.parse('{"path":"/function/admin/group_action.html","title":"群管理操作","lang":"zh-CN","frontmatter":{"description":"群管理操作 相关信息 本功能暂时仅支持 QQ 第三方野生 Bot，后续可能会适配其他平台 对于 QQ 官方 腾讯方面没有给出群权限事务的判断，暂时无法适配 概述 本功能用于方便各群进行管理操作 指令 /禁言 指令： /禁言[用户] [时间] 别名： .mute、/mute 参数： 用户： 支持与QQ号，支持多个用户，艾特之间无需分隔，各QQ号之间用空格...","head":[["meta",{"property":"og:url","content":"https://bot.yunmengdu.cn/function/admin/group_action"}],["meta",{"property":"og:site_name","content":"YuukaBot"}],["meta",{"property":"og:title","content":"群管理操作"}],["meta",{"property":"og:description","content":"群管理操作 相关信息 本功能暂时仅支持 QQ 第三方野生 Bot，后续可能会适配其他平台 对于 QQ 官方 腾讯方面没有给出群权限事务的判断，暂时无法适配 概述 本功能用于方便各群进行管理操作 指令 /禁言 指令： /禁言[用户] [时间] 别名： .mute、/mute 参数： 用户： 支持与QQ号，支持多个用户，艾特之间无需分隔，各QQ号之间用空格..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-01T03:24:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-01T03:24:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"群管理操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-01T03:24:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"旋律\\",\\"url\\":\\"https://github.com/MelodyYuuka\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"指令","slug":"指令","link":"#指令","children":[{"level":3,"title":"/禁言","slug":"禁言","link":"#禁言","children":[]},{"level":3,"title":"/解禁","slug":"解禁","link":"#解禁","children":[]}]}],"git":{"createdTime":1681299711000,"updatedTime":1717212273000,"contributors":[{"name":"Melody_Yuuka","username":"Melody_Yuuka","email":"a876987@126.com","commits":8,"url":"https://github.com/Melody_Yuuka"}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"function/admin/group_action.md","localizedDate":"2023年4月12日","autoDesc":true}');export{B as comp,c as data};
