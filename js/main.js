const i18n = {
    en: {
        hero_title: "Precision & Sound",
        hero_desc: "Independent studio specialized in game optimization and atmospheric audio engineering.",
        title_software: "Software & Tools",
        title_audio: "Audio Assets",
        ap_name: "Audio Porter",
        ap_desc: "Smart audio optimizer for Godot and Ren'Py.",
        ao_name: "Alenia Optimizer",
        ao_desc: "System maintenance for high-performance creative work.",
        gk_name: "Gatekeeper",
        gk_desc: "The Echo Corp Leak: Desktop horror experience.",
        btn_get: "Get Tool", btn_download: "Download", btn_access: "Access Case"
    },
    es: {
        hero_title: "Precisión y Sonido",
        hero_desc: "Estudio independiente especializado en optimización de juegos e ingeniería de audio atmosférico.",
        title_software: "Software y Herramientas",
        title_audio: "Assets de Audio",
        ap_name: "Audio Porter",
        ap_desc: "Optimizado inteligente para Godot y Ren'Py.",
        ao_name: "Alenia Optimizer",
        ao_desc: "Mantenimiento de sistema para trabajo creativo de alto rendimiento.",
        gk_name: "Gatekeeper",
        gk_desc: "The Echo Corp Leak: Experiencia de horror simulado.",
        btn_get: "Obtener", btn_download: "Descargar", btn_access: "Acceder"
    },
    jp: {
        hero_title: "精度と音響",
        hero_desc: "ゲームの最適化と没入感のある音響エンジニアリングを専門とする独立系スタジオ。",
        title_software: "ソフトウェアとツール",
        title_audio: "オーディオアセット",
        ap_name: "Audio Porter",
        ap_desc: "GodotおよびRen'Py用のスマートオーディオ最適化ツール。",
        ao_name: "Alenia Optimizer",
        ao_desc: "クリエイティブな作業のためのシステムメンテナンスツール。",
        gk_name: "Gatekeeper",
        gk_desc: "The Echo Corp Leak：デスクトップホラー体験。",
        btn_get: "入手する", btn_download: "ダウンロード", btn_access: "アクセス"
    },
    zh: {
        hero_title: "精准与音效",
        hero_desc: "专门从事游戏优化和大气音频工程的独立工作室。",
        title_software: "软件与工具",
        title_audio: "音频资源",
        ap_name: "Audio Porter",
        ap_desc: "适用于 Godot 和 Ren'Py 的智能音频优化器。",
        ao_name: "Alenia Optimizer",
        ao_desc: "用于高性能创意工作的系统维护工具。",
        gk_name: "Gatekeeper",
        gk_desc: "The Echo Corp Leak：桌面恐怖模拟体验。",
        btn_get: "获取工具", btn_download: "下载", btn_access: "进入案例"
    }
};

// Vinculamos la función al objeto global window para que el HTML la encuentre
window.changeLang = function(lang) {
    const texts = i18n[lang];
    if (!texts) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.textContent = texts[key];
        }
    });

    // Guardar preferencia, con manejo de errores para navegadores locales
    try {
        localStorage.setItem('alenia_lang', lang);
    } catch (e) {
        console.warn("No se pudo guardar la preferencia de idioma localmente.");
    }
};

// Carga inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    let saved = 'en';
    try {
        saved = localStorage.getItem('alenia_lang') || 'en';
    } catch (e) {}

    const selector = document.getElementById('langSelect');
    if (selector) {
        selector.value = saved;
        window.changeLang(saved);
    }
});
