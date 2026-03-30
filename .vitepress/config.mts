import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config

const baseUrl = '/vitepress-blog/'

export default defineConfig({
  base: baseUrl,

  title: "BLEACHの文档站",
  description: "",

  rewrites: {
    "about/index.md": "index.md",
  },

  themeConfig: {
    logo: {
      src: baseUrl + "assets/profile/profile.jpg",
      alt: "BLEACHの文档站",
      style: {
        borderRadius: "50%",
      },
    },

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
        miniSearch: {
          searchOptions: {
            combineWith: "AND",
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },

    nav: [
      { text: "软件设计师", link: "/softSkills/计算机组成与体系结构/进制" },
      { text: "关于我", link: "/about/" },
    ],
    sidebar: {
      "/softSkills/": [
        {
          text: "计算机组成与体系结构",
          items: [
            {
              items: [
                { text: "进制", link: "/softSkills/计算机组成与体系结构/进制" },
                { text: "码制", link: "/softSkills/计算机组成与体系结构/码制" },
                {
                  text: "浮点数的表示",
                  link: "/softSkills/计算机组成与体系结构/浮点数的表示",
                },
                {
                  text: "算术与逻辑运算",
                  link: "/softSkills/计算机组成与体系结构/算术与逻辑运算",
                },
                {
                  text: "常用校验码",
                  link: "/softSkills/计算机组成与体系结构/常用校验码",
                },
                {
                  text: "CPU的组成",
                  link: "/softSkills/计算机组成与体系结构/CPU的组成",
                },
                {
                  text: "层次化存储体系",
                  link: "/softSkills/计算机组成与体系结构/层次化存储体系",
                },
                {
                  text: "Cache映射方式",
                  link: "/softSkills/计算机组成与体系结构/Cache映射方式",
                },
                {
                  text: "数据传输方式",
                  link: "/softSkills/计算机组成与体系结构/数据传输方式",
                },
                {
                  text: "总线的分类与寻址方式",
                  link: "/softSkills/计算机组成与体系结构/总线的分类与寻址方式",
                },
                {
                  text: "寻址方式",
                  link: "/softSkills/计算机组成与体系结构/寻址方式",
                },
                {
                  text: "指令系统",
                  link: "/softSkills/计算机组成与体系结构/指令系统",
                },
                {
                  text: "流水线技术",
                  link: "/softSkills/计算机组成与体系结构/流水线技术",
                },
                {
                  text: "可靠性指标",
                  link: "/softSkills/计算机组成与体系结构/可靠性指标",
                },
                {
                  text: "串联电路图与并联电路图的可靠度",
                  link: "/softSkills/计算机组成与体系结构/串联电路图与并联电路图的可靠度",
                },
              ],
            },
          ],
        },
      ],
    },
  },
});
