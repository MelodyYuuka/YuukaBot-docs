export type ChatExampleNode =
  | { type: "text"; text: string }
  | { type: "command"; text: string; command: string }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "break" }
  | {
      type: "element";
      tag: "h3" | "p" | "blockquote" | "ul" | "li" | "strong";
      children: ChatExampleNode[];
    };

export interface ChatExampleReply {
  content: ChatExampleNode[];
  actions: string[][];
}

export interface ChatExampleStep {
  command: string;
  replies: ChatExampleReply[];
}

export interface ChatExampleDefinition {
  title: string;
  steps: ChatExampleStep[];
}

// 这里只保存固定演示内容，不请求机器人接口，也不接收访客输入。
// 按 STS 生产处理器的 Markdown 回复生成，保留消息边界、片段顺序与图片尺寸。
// 已核对本地统计缓存；内联指令和键盘只展示真实标签，不绑定交互。
export const chatExamples = {
  "sts": {
    "title": "杀戮尖塔图鉴",
    "steps": [
      {
        "command": "/尖塔菜单",
        "replies": [
          {
            "content": [
              {
                "type": "element",
                "tag": "h3",
                "children": [
                  {
                    "type": "text",
                    "text": "🍪杀戮尖塔主菜单"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "blockquote",
                "children": [
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "text": "查查卡牌、遗物和事件，一起爬塔吧~"
                      },
                      {
                        "type": "break"
                      },
                      {
                        "type": "text",
                        "text": "📖查：按名称找最接近的"
                      },
                      {
                        "type": "break"
                      },
                      {
                        "type": "text",
                        "text": "🔍搜：按名称或效果列表；多个关键词可以用空格隔开哦~"
                      },
                      {
                        "type": "break"
                      },
                      {
                        "type": "text",
                        "text": "主菜单查询两代，可在下方选择单代菜单"
                      }
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "📖查卡",
                "🔍搜卡"
              ],
              [
                "📖查遗物",
                "🔍搜遗物"
              ],
              [
                "📜查事件",
                "🔍搜事件"
              ],
              [
                "塔一菜单",
                "塔二菜单"
              ],
              [
                "🏆塔一排行",
                "🏆塔二排行"
              ]
            ]
          }
        ]
      },
      {
        "command": "/尖塔查卡 痛击",
        "replies": [
          {
            "content": [
              {
                "type": "element",
                "tag": "h3",
                "children": [
                  {
                    "type": "text",
                    "text": "找到 2 张卡啦~"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "ul",
                "children": [
                  {
                    "type": "element",
                    "tag": "li",
                    "children": [
                      {
                        "type": "element",
                        "tag": "p",
                        "children": [
                          {
                            "type": "command",
                            "text": "痛击（一代）",
                            "command": "/塔一查卡 痛击"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "li",
                    "children": [
                      {
                        "type": "element",
                        "tag": "p",
                        "children": [
                          {
                            "type": "command",
                            "text": "痛击（二代）",
                            "command": "/塔二查卡 痛击"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "搜卡",
                "查卡",
                "菜单"
              ]
            ]
          }
        ]
      },
      {
        "command": "/塔一查卡 痛击",
        "replies": [
          {
            "content": [
              {
                "type": "element",
                "tag": "h3",
                "children": [
                  {
                    "type": "text",
                    "text": "痛击"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "blockquote",
                "children": [
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "text": "铁甲战士 · 初始 · 攻击"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts1-bash.webp",
                    "alt": "痛击未升级卡面",
                    "width": 103,
                    "height": 133
                  },
                  {
                    "type": "text",
                    "text": " "
                  },
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts1-bash-plus.webp",
                    "alt": "痛击升级卡面",
                    "width": 103,
                    "height": 133
                  }
                ]
              }
            ],
            "actions": [
              [
                "搜卡",
                "查卡",
                "菜单"
              ]
            ]
          }
        ]
      },
      {
        "command": "/塔二查卡 痛击",
        "replies": [
          {
            "content": [
              {
                "type": "element",
                "tag": "h3",
                "children": [
                  {
                    "type": "text",
                    "text": "痛击"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "blockquote",
                "children": [
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "text": "铁甲战士 · 初始 · 攻击"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts2-bash.webp",
                    "alt": "二代痛击未升级卡面",
                    "width": 107,
                    "height": 133
                  },
                  {
                    "type": "text",
                    "text": " "
                  },
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts2-bash-plus.webp",
                    "alt": "二代痛击升级卡面",
                    "width": 107,
                    "height": 133
                  }
                ]
              }
            ],
            "actions": [
              [
                "搜卡",
                "查卡",
                "菜单"
              ]
            ]
          }
        ]
      },
      {
        "command": "/塔一查事件 幽灵议会",
        "replies": [
          {
            "content": [
              {
                "type": "element",
                "tag": "h3",
                "children": [
                  {
                    "type": "text",
                    "text": "幽灵议会"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "blockquote",
                "children": [
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "text": "事件 · 第二幕"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts1-ghosts.webp",
                    "alt": "幽灵议会事件画面",
                    "width": 320,
                    "height": 320
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "text",
                    "text": "初始选项 · 第 1/1 页"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "text",
                    "text": "（进阶 ≥ 15时）"
                  },
                  {
                    "type": "break"
                  },
                  {
                    "type": "element",
                    "tag": "strong",
                    "children": [
                      {
                        "type": "text",
                        "text": "接受"
                      }
                    ]
                  },
                  {
                    "type": "break"
                  },
                  {
                    "type": "text",
                    "text": "获得3张"
                  },
                  {
                    "type": "command",
                    "text": "灵体",
                    "command": "/塔一查卡 灵体"
                  },
                  {
                    "type": "text",
                    "text": "牌。失去50%最大生命（向上取整，最大生命至少保留1点）。"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "text",
                    "text": "（进阶 < 15时）"
                  },
                  {
                    "type": "break"
                  },
                  {
                    "type": "element",
                    "tag": "strong",
                    "children": [
                      {
                        "type": "text",
                        "text": "接受"
                      }
                    ]
                  },
                  {
                    "type": "break"
                  },
                  {
                    "type": "text",
                    "text": "获得5张"
                  },
                  {
                    "type": "command",
                    "text": "灵体",
                    "command": "/塔一查卡 灵体"
                  },
                  {
                    "type": "text",
                    "text": "牌。失去50%最大生命（向上取整，最大生命至少保留1点）。"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "element",
                    "tag": "strong",
                    "children": [
                      {
                        "type": "text",
                        "text": "拒绝"
                      }
                    ]
                  }
                ]
              }
            ],
            "actions": [
              [
                "返回菜单"
              ]
            ]
          }
        ]
      },
      {
        "command": "/塔一查卡 灵体",
        "replies": [
          {
            "content": [
              {
                "type": "element",
                "tag": "h3",
                "children": [
                  {
                    "type": "text",
                    "text": "灵体"
                  }
                ]
              },
              {
                "type": "element",
                "tag": "blockquote",
                "children": [
                  {
                    "type": "element",
                    "tag": "p",
                    "children": [
                      {
                        "type": "text",
                        "text": "无色 · 特殊 · 技能"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "p",
                "children": [
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts1-apparition.webp",
                    "alt": "灵体未升级卡面",
                    "width": 102,
                    "height": 133
                  },
                  {
                    "type": "text",
                    "text": " "
                  },
                  {
                    "type": "image",
                    "src": "/images/chat/sts/sts1-apparition-plus.webp",
                    "alt": "灵体升级卡面",
                    "width": 102,
                    "height": 133
                  },
                  {
                    "type": "break"
                  },
                  {
                    "type": "text",
                    "text": "事件关联："
                  },
                  {
                    "type": "break"
                  },
                  {
                    "type": "command",
                    "text": "幽灵议会",
                    "command": "/塔一查事件 幽灵议会"
                  },
                  {
                    "type": "text",
                    "text": " → 接受：获得灵体，并失去最大生命；张数随进阶变化。"
                  }
                ]
              }
            ],
            "actions": [
              [
                "搜卡",
                "查卡",
                "菜单"
              ]
            ]
          }
        ]
      }
    ]
  }
} satisfies Record<string, ChatExampleDefinition>;

export type ChatExampleName = keyof typeof chatExamples;
