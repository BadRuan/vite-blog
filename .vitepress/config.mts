import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的袜子都是洞",
  description: "Blog",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'Linux', link: '/linux'},
      { text: 'Python', link: '/python' },
      { text: '关于', link: '/about'}
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BadRuan' }
    ],
    footer: {
      copyright: '皖 ICP 备 <a href="https://beian.miit.gov.cn/#/Integrated/index">2024036993</a> 号 '
  }
  }
})
