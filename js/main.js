/* js/main.js */
console.log("%c SYSTEM ONLINE ", "background: #58a6ff; color: #000; padding: 4px; font-weight: bold; border-radius: 4px;");
console.log("%c Welcome to Alenia Studios Terminals.", "color: #8b949e; font-family: monospace;");
console.log("K.A.I.A. is watching...");

// Aquí podrás agregar animaciones futuras o interacciones
const translations = {
    en: {
        nav_games: "Games", nav_tools: "Tools", nav_music: "Music", nav_faq: "FAQ",
        hero_tag: "> SOFTWARE DEVELOPMENT & AUDIO ENGINEERING <",
        latest_title: "NEW RELEASE",
        news_desc: "Audio Porter v2.2: Now with Godot support and Smart Scan.",
        faq_q1: "How to use Audio Porter?",
        faq_a1: "Select your folder, choose the engine (Ren'Py/Godot) and click optimize.",
        // ... (añadir más llaves)
    },
    es: {
        nav_games: "Juegos", nav_tools: "Herramientas", nav_music: "Música", nav_faq: "Preguntas",
        hero_tag: "> DESARROLLO DE SOFTWARE E INGENIERÍA DE AUDIO <",
        latest_title: "NUEVO LANZAMIENTO",
        news_desc: "Audio Porter v2.2: Ahora con soporte para Godot y Smart Scan.",
        faq_q1: "¿Cómo usar Audio Porter?",
        faq_a1: "Selecciona tu carpeta, elige el motor (Ren'Py/Godot) y optimiza.",
    },
    jp: {
        nav_games: "ゲーム", nav_tools: "ツール", nav_music: "音楽", nav_faq: "よくある質問",
        hero_tag: "> ソフトウェア開発とオーディオエンジニアリング <",
        latest_title: "最新リリース",
        news_desc: "Audio Porter v2.2：Godotサポートとスマートスキャンを搭載。",
        faq_q1: "Audio Porterの使い方は？",
        faq_a1: "フォルダを選択し、エンジン（Ren'Py/Godot）を選んで最適化をクリックします。",
    },
    zh: {
        nav_games: "游戏", nav_tools: "工具", nav_music: "音乐", nav_faq: "常见问题",
        hero_tag: "> 软件开发与音频工程 <",
        latest_title: "最新发布",
        news_desc: "Audio Porter v2.2：现已支持 Godot 和智能扫描。",
        faq_q1: "如何使用 Audio Porter？",
        faq_a1: "选择文件夹，选择引擎（Ren'Py/Godot），然后点击优化。",
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || translations['en'][key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLang', lang);
}

// Cargar lenguaje preferido o detectar navegador
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('preferredLang') || 'en';
    setLanguage(saved);
});
