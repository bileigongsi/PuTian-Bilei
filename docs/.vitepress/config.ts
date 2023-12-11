import type { UserConfig } from 'vitepress'
import { defineConfig, type DefaultTheme } from 'vitepress'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')
import mdFootnote from 'markdown-it-footnote'
import mdTaskList from 'markdown-it-task-lists'

const config = defineConfig({
	vite: {
		plugins: [
		
		],
	},
	base: '/putian-bilei/',
	lang: 'zh-CN',
	// 网站标题，左上角以及meta标题
	title: '泉州避雷公司',
	description: '泉州找工作防踩雷',
	cleanUrls: true,
	// 是否忽略死链
	ignoreDeadLinks: false,
	//页面底部显示最后更新时间。
	lastUpdated: true,
	// markdown配置
	colorModeSwitch: true,
	//切换主题
	contributors: true, //页面底部显示文档贡献者列表。
	markdown: {
		math: true,
		lineNumbers: true,
		container: {
			tipLabel: '小提示',
			warningLabel: '警告',
			dangerLabel: '危险',
			infoLabel: '信息',
			detailsLabel: '详细信息',
		},
		// linkify: false,
		config: (md) => {
			md.use(mdFootnote)
			md.use(mdTaskList)
		},
	},
	
	//  主题配置
	themeConfig: {
		logo: { src: '/favicon.svg', width: 24, height: 24 },
		lastUpdated: {
			text: '最后更新时间',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium',
			},
		},
		darkModeSwitchLabel: '主题',
		sidebarMenuLabel: '黑榜名单',
		returnToTopLabel: '回到顶部',
		externalLinkIcon: true,
		// aside: false,
		outlineTitle: '此页的章节',
		// 显示层级
		outline: { level: 'deep', label: '当前页' },
		// lastUpdatedText: '最近更新时间',
		siteTitle: '找工作防踩雷',
		// siteTitle: false, // 不显示标题
		// 上一页下一页文本
		docFooter: {
			prev: '上一页',
			next: '下一页',
		},
		
	//设置标签页图标
  	head:[
        ['link', { rel: 'png', href: '/favicon.png' }],
        ['meta', { name: 'theme-color', content: '#555BC2' }],
        ['meta', { name: 'og:type', content: 'website' }],
    ],
		
	//outline: false,
	aside: false,
	
	// 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
          '但是，如果你持之以恒，继续探寻，你可能会抵达你想要去的地方。',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',

//侧边栏代码开始
  sidebar: [
  //莆田公司黑榜
      {
        text: "莆田公司黑榜",
        items: [
          { text: "莆田公司黑榜", link: "/about/about" },
          { text: "莆田避雷公司文档", link: "https://docs.qq.com/sheet/DT0dWcFdRcnJXdG92?tab=BB08J2" },
        ],
      },
], //侧边栏代码结束
		
// 每个页面页脚的编辑此页  :path  为当前路由
	editLink: {
			text: '在 GitHub 中改进此页面的内容',
			pattern: 'https://github.com/bileigongsi/putian-bilei/edit/main/docs/:path',
	},

	footer: {
			message: '由 Apache 许可证 2.0 发布。',
			copyright: '版权所有 © 2023-2024 找工作防踩雷社区',
	},
	
	search: {
			provider: 'local',
			options: {
				translations: {
					button: {
						buttonText: '搜索内容',
						buttonAriaLabel: '搜索内容',
					},
					modal: {
						noResultsText: '没有找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: {
							selectText: '选择',
							navigateText: '切换',
							closeText: '关闭',
						},
					},
				},
			},
	},
	
	}, //DefaultTheme代码结束

	buildEnd(siteConfig) {
		// console.log(siteConfig)
	},
	transformHead(ctx) {
		// console.log(1111, ctx)
	},
})

export default config
