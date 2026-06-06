import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://chunboblog.com",
    title: "ChunboBlog",
    description: "A minimal, responsive and SEO-friendly Astro blog theme.",
    author: "Chunbo Liu",
    profile: "undefined",
    ogImage: "atomes.JPG",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/chunbo1208-rgb" },
    { name: "x",        url: "https://x.com/Chunb_liu" },
    { name: "youtube", url: "https://www.youtube.com/@SiliRouter" },
    { name: "bilibili", url: "https://space.bilibili.com/3546884723444099?spm_id_from=333.1007.0.0" },
    { name: "mail",     url: "mailto:chunbo1208@gmail.com" },

  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});