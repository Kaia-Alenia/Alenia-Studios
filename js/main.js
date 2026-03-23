const i18n = {
    en: {
        nav_news: "News", nav_software: "Software", nav_audio: "Audio", nav_faq: "FAQ",
        hero_subtitle: "ADVANCED INDIE SOLUTIONS & SOUNDSCAPES",
        title_news: "Latest Updates", title_software: "Engineering & Games", title_audio: "Audio Vault",
        news_ap_desc: "Native Godot & Ren'Py support released.",
        gk_desc_short: "Desktop-horror simulation. Uncover the secrets of Echo Corp.",
        faq_q1: "Commercial use?", faq_a1: "All music assets include a commercial license for indie projects."
    },
    es: {
        nav_news: "Noticias", nav_software: "Software", nav_audio: "Música", nav_faq: "Preguntas",
        hero_subtitle: "SOLUCIONES INDIE Y PAISAJES SONOROS",
        title_news: "Últimas Noticias", title_software: "Ingeniería y Juegos", title_audio: "Bóveda de Audio",
        news_ap_desc: "Lanzado soporte nativo para Godot y Ren'Py.",
        gk_desc_short: "Simulación de horror. Descubre los secretos de Echo Corp.",
        faq_q1: "¿Uso comercial?", faq_a1: "Todos los assets musicales incluyen licencia comercial para proyectos indie."
    },
    jp: {
        nav_news: "ニュース", nav_software: "ソフトウェア", nav_audio: "オーディオ", nav_faq: "よくある質問",
        hero_subtitle: "高度なインディーソリューションとサウンドスケープ",
        title_news: "最新情報", title_software: "エンジニアリングとゲーム", title_audio: "オーディオバルト",
        news_ap_desc: "GodotとRen'Pyのネイティブサポートがリリースされました。",
        gk_desc_short: "デスクトップホラーシミュレーション。Echo Corpの秘密を暴け。"
    },
    zh: {
        nav_news: "新闻", nav_software: "软件", nav_audio: "音频", nav_faq: "常见问题",
        hero_subtitle: "先进的独立游戏解决方案与音景",
        title_news: "最新动态", title_software: "工程与游戏", title_audio: "音频库",
        news_ap_desc: "发布了对 Godot 和 Ren'Py 的原生支持。",
        gk_desc_short: "桌面恐怖模拟。揭开 Echo Corp 的秘密。"
    }
};

function updateLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) el.innerText = i18n[lang][key];
    });
    localStorage.setItem('alenia_lang', lang);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('alenia_lang') || 'en';
    document.querySelector('.lang-select').value = savedLang;
    updateLanguage(savedLang);
});
