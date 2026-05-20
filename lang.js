const translations = {
    en: {
        // ... (старые ключи) ...
        title: "Chain Bank", motto: "Faith in Blockchain",
        orthodox_link: "Orthodox branch", catholic_link: "Catholic branch",
        buy_tokens: "Buy tokens", dao: "DAO", memory: "Memory",
        prayers: "Prayers", saints: "Saints", parishes: "Parishes",
        actions: "40 deeds", confession: "Confession", whitepaper: "Whitepaper",
        calendar: "📅 Liturgical Calendar", live_title: "📺 Live Stream",
        live_source: "📡 Holy Trinity Church, Toronto — 24/7",
        top_donors: "👑 Top Donors (this week)", your_data: "Your data",
        wallet_placeholder: "Your Solana wallet", name_placeholder: "Your name",
        save: "✙ Save", forGod: "For God", againstGod: "Against God",
        eternal_candle: "✨ Eternal Candle", against_btn: "💀 Against God",
        for_btn: "📿 For God", direct_donations: "🤝 Direct donations (SOL / USDC)",
        copy: "📋 Copy", large_donations: "🏦 Large donations (SWIFT / SEPA)",
        large_desc: "For donations from $1000. After transfer, contact us:",
        refer: "👥 Refer a friend", footer: "Faith, hope, love and blockchain",
        no_donors: "No donors yet. Be the first!", ordinary_day: "Ordinary Time",
        light_candle: "🕯️ Light a candle in his honor", copied_msg: "Copied!",
        saved_msg: "Saved", need_wallet: "Enter wallet", need_txid: "Enter TXID",
        verify_title: "Confirmation", txid_placeholder: "Paste TXID",
        verify_btn: "✙ Verify", candles_count: "Candles burning",
        // Ключи для страницы "40 дел"
        actions_title: "🙏 40 Spiritual Deeds",
        actions_desc: "Click on any deed → a window with the address and instructions will open → send tokens → paste TXID → get confirmation",
        back: "← Back to Home",
        what_to_do: "What to do",
        amount: "Amount",
        send_to: "Send to address",
        copy_addr: "📋 Copy address",
        after_send: "After sending, paste TXID:",
        confirm_btn: "✅ Confirm",
        close: "Close",
        need_txid: "Enter TXID",
        need_wallet: "First save your wallet on the main page",
        deed_done: "Deed counted!",
        select: "Select",
        price: "Price",
        // 40 дел
        deed1: "🕯️ Ordinary Candle", deed1_desc: "Send 1 USVT to God's address",
        deed2: "✨ Eternal Candle", deed2_desc: "Send 1 USVT + 1 DEMON to God's address",
        deed3: "🏛️ Cathedral Candle", deed3_desc: "Send 10 USVT to God's address",
        deed4: "📿 Named Prayer", deed4_desc: "Send 5 USVT to God's address",
        deed5: "📆 Sorokoust (40 days)", deed5_desc: "Send 40 USVT to God's address",
        deed6: "📅 Yearly Candle", deed6_desc: "Send 365 USVT to God's address",
        deed7: "⛪ Church Memorial", deed7_desc: "Send 100 USVT to God's address",
        deed8: "📖 Prayer Rule", deed8_desc: "Send 1 USVT to God's address",
        deed9: "🎨 Saint Avatar", deed9_desc: "Send 50 USVT to God's address",
        deed10: "🖼️ Icon in Gallery", deed10_desc: "Send 100 USVT to God's address",
        deed11: "🙏 Online Moleben", deed11_desc: "Send 20 USVT to God's address",
        deed12: "🤝 Donation", deed12_desc: "Send any amount of USVT to God's address",
        deed13: "🏅 Friend of Monastery", deed13_desc: "Send 50 USVT (month) to God's address",
        deed14: "🗳️ Create Vote", deed14_desc: "Send 100 BOG to DEMON address",
        deed15: "⚡ Strengthen Vote", deed15_desc: "Send 1000 BOG to DEMON address",
        deed16: "👑 Elder", deed16_desc: "Send 500 USVT to God's address",
        deed17: "📢 Site Advertising", deed17_desc: "Send 200 USVT to God's address",
        deed18: "🖼️ NFT Icon", deed18_desc: "Send 50 USVT to God's address",
        deed19: "🕊️ Relic Fragment", deed19_desc: "Send 500 USVT to God's address",
        deed20: "👥 12 Apostles", deed20_desc: "Send 600 USVT to God's address",
        deed21: "🎓 Pilgrim Certificate", deed21_desc: "Send 30 USVT to God's address",
        deed22: "💀 Desecrate Candle", deed22_desc: "Send 1 DEMON to God's address",
        deed23: "⚫ Black Candle", deed23_desc: "Send 1 DEMON to God's address",
        deed24: "👿 Blasphemer of the Week", deed24_desc: "Send 100 DEMON to God's address",
        deed25: "🗑️ Remove Icon", deed25_desc: "Send 50 DEMON to God's address",
        deed26: "🙏 For a Loved One", deed26_desc: "Send 1 USVT to God's address",
        deed27: "🕯️ For Health of a Relative", deed27_desc: "Send 3 USVT to God's address",
        deed28: "🍀 For Luck in Business", deed28_desc: "Send 5 USVT to God's address",
        deed29: "✈️ For Travelers", deed29_desc: "Send 2 USVT to God's address",
        deed30: "🏠 For Family Well-being", deed30_desc: "Send 10 USVT to God's address",
        deed31: "⚰️ For the Departed", deed31_desc: "Send 1 USVT to God's address",
        deed32: "💪 For Your Own Health", deed32_desc: "Send 2 USVT to God's address",
        deed33: "🙌 For Forgiveness of Sins", deed33_desc: "Send 7 USVT to God's address",
        deed34: "⛪ For Strengthening Faith", deed34_desc: "Send 5 USVT to God's address",
        deed35: "😌 For Deliverance from Despondency", deed35_desc: "Send 3 USVT to God's address",
        deed36: "🌍 For All Orthodox", deed36_desc: "Send 1 USVT to God's address",
        deed37: "🕊️ For World Peace", deed37_desc: "Send 10 USVT to God's address",
        deed38: "🤒 For the Sick and Suffering", deed38_desc: "Send 5 USVT to God's address",
        deed39: "🛡️ For the Oppressed", deed39_desc: "Send 3 USVT to God's address",
        deed40: "🕯️ For All Forgotten Departed", deed40_desc: "Send 2 USVT to God's address"
    },
    ru: {
        // ... (старые ключи) ...
        title: "Chain Bank", motto: "Вера в блокчейне",
        orthodox_link: "Православная ветка", catholic_link: "Католическая ветка",
        buy_tokens: "Купить токены", dao: "DAO", memory: "Память",
        prayers: "Молитвы", saints: "Святые", parishes: "Храмы",
        actions: "40 дел", confession: "Исповедь", whitepaper: "Whitepaper",
        calendar: "📅 Литургический календарь", live_title: "📺 Прямая трансляция",
        live_source: "📡 Свято-Троицкий собор, Торонто — 24/7",
        top_donors: "👑 Топ доноров (неделя)", your_data: "Ваши данные",
        wallet_placeholder: "Ваш Solana кошелёк", name_placeholder: "Ваше имя",
        save: "✙ Сохранить", forGod: "За Бога", againstGod: "Против Бога",
        eternal_candle: "✨ Вечная свеча", against_btn: "💀 Против Бога",
        for_btn: "📿 За Бога", direct_donations: "🤝 Прямые пожертвования (SOL/USDC)",
        copy: "📋 Копировать", large_donations: "🏦 Крупные пожертвования (SWIFT/SEPA)",
        large_desc: "Для пожертвований от $1000. После перевода свяжитесь с нами:",
        refer: "👥 Приведи друга", footer: "Вера, надежда, любовь и блокчейн",
        no_donors: "Пока никого. Станьте первым!", ordinary_day: "Рядовой день",
        light_candle: "🕯️ Зажгите свечу в его честь", copied_msg: "Скопировано!",
        saved_msg: "Сохранено", need_wallet: "Введите кошелёк", need_txid: "Введите TXID",
        verify_title: "Подтверждение", txid_placeholder: "Вставьте TXID",
        verify_btn: "✙ Проверить", candles_count: "Свечей горит",
        // Ключи для страницы "40 дел"
        actions_title: "🙏 40 духовных дел",
        actions_desc: "Нажмите на любое дело → откроется окно с адресом и инструкцией → отправьте токены → вставьте TXID → получите подтверждение",
        back: "← На главную",
        what_to_do: "Что делать",
        amount: "Количество",
        send_to: "Отправить на адрес",
        copy_addr: "📋 Копировать адрес",
        after_send: "После отправки вставьте TXID:",
        confirm_btn: "✅ Подтвердить",
        close: "Закрыть",
        need_txid: "Введите TXID",
        need_wallet: "Сначала сохраните ваш кошелёк на главной странице",
        deed_done: "Дело засчитано!",
        select: "Выбрать",
        price: "Цена",
        // 40 дел
        deed1: "🕯️ Обычная свеча", deed1_desc: "Отправьте 1 USVT на адрес Бога",
        deed2: "✨ Вечная свеча", deed2_desc: "Отправьте 1 USVT + 1 DEMON на адрес Бога",
        deed3: "🏛️ Соборная свеча", deed3_desc: "Отправьте 10 USVT на адрес Бога",
        deed4: "📿 Именная молитва", deed4_desc: "Отправьте 5 USVT на адрес Бога",
        deed5: "📆 Сорокоуст (40 дней)", deed5_desc: "Отправьте 40 USVT на адрес Бога",
        deed6: "📅 Годовая свеча", deed6_desc: "Отправьте 365 USVT на адрес Бога",
        deed7: "⛪ Поминовение в храме", deed7_desc: "Отправьте 100 USVT на адрес Бога",
        deed8: "📖 Молитвенное правило", deed8_desc: "Отправьте 1 USVT на адрес Бога",
        deed9: "🎨 Аватар святого", deed9_desc: "Отправьте 50 USVT на адрес Бога",
        deed10: "🖼️ Икона в галерее", deed10_desc: "Отправьте 100 USVT на адрес Бога",
        deed11: "🙏 Молебен онлайн", deed11_desc: "Отправьте 20 USVT на адрес Бога",
        deed12: "🤝 Пожертвование", deed12_desc: "Отправьте любую сумму USVT на адрес Бога",
        deed13: "🏅 Друг монастыря", deed13_desc: "Отправьте 50 USVT (месяц) на адрес Бога",
        deed14: "🗳️ Создать голосование", deed14_desc: "Отправьте 100 BOG на адрес DEMON",
        deed15: "⚡ Усилить голос", deed15_desc: "Отправьте 1000 BOG на адрес DEMON",
        deed16: "👑 Старейшина", deed16_desc: "Отправьте 500 USVT на адрес Бога",
        deed17: "📢 Реклама на сайте", deed17_desc: "Отправьте 200 USVT на адрес Бога",
        deed18: "🖼️ NFT-икона", deed18_desc: "Отправьте 50 USVT на адрес Бога",
        deed19: "🕊️ Фрагмент мощей", deed19_desc: "Отправьте 500 USVT на адрес Бога",
        deed20: "👥 12 апостолов", deed20_desc: "Отправьте 600 USVT на адрес Бога",
        deed21: "🎓 Сертификат паломника", deed21_desc: "Отправьте 30 USVT на адрес Бога",
        deed22: "💀 Осквернить свечу", deed22_desc: "Отправьте 1 DEMON на адрес Бога",
        deed23: "⚫ Чёрная свеча", deed23_desc: "Отправьте 1 DEMON на адрес Бога",
        deed24: "👿 Богохульник недели", deed24_desc: "Отправьте 100 DEMON на адрес Бога",
        deed25: "🗑️ Снять икону", deed25_desc: "Отправьте 50 DEMON на адрес Бога",
        deed26: "🙏 За любимого человека", deed26_desc: "Отправьте 1 USVT на адрес Бога",
        deed27: "🕯️ За здоровье близкого", deed27_desc: "Отправьте 3 USVT на адрес Бога",
        deed28: "🍀 За удачу в делах", deed28_desc: "Отправьте 5 USVT на адрес Бога",
        deed29: "✈️ За путешествующих", deed29_desc: "Отправьте 2 USVT на адрес Бога",
        deed30: "🏠 За благополучие семьи", deed30_desc: "Отправьте 10 USVT на адрес Бога",
        deed31: "⚰️ За усопших", deed31_desc: "Отправьте 1 USVT на адрес Бога",
        deed32: "💪 За здравие своё", deed32_desc: "Отправьте 2 USVT на адрес Бога",
        deed33: "🙌 За прощение грехов", deed33_desc: "Отправьте 7 USVT на адрес Бога",
        deed34: "⛪ За укрепление веры", deed34_desc: "Отправьте 5 USVT на адрес Бога",
        deed35: "😌 За избавление от уныния", deed35_desc: "Отправьте 3 USVT на адрес Бога",
        deed36: "🌍 За всех православных", deed36_desc: "Отправьте 1 USVT на адрес Бога",
        deed37: "🕊️ За мир во всём мире", deed37_desc: "Отправьте 10 USVT на адрес Бога",
        deed38: "🤒 За болящих и страждущих", deed38_desc: "Отправьте 5 USVT на адрес Бога",
        deed39: "🛡️ За обиженных и угнетённых", deed39_desc: "Отправьте 3 USVT на адрес Бога",
        deed40: "🕯️ За всех усопших безродных", deed40_desc: "Отправьте 2 USVT на адрес Бога"
    },
    // ... (здесь должны быть остальные языки: es, zh, fr, de, it, ja. Для краткости они не приведены, но вы должны добавить их, переведя все ключи из en)
    // Для корректной работы добавьте их по аналогии с en или ru.
    es: {}, zh: {}, fr: {}, de: {}, it: {}, ja: {}
};

let currentLang = localStorage.getItem('chainbank_lang') || 'ru';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('chainbank_lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add('active');
        else btn.classList.remove('active');
    });
}

function renderLangButtons(containerId = 'lang-switcher') {
    const container = document.getElementById(containerId);
    if (!container) return;
    const langs = { en: 'EN', ru: 'RU', es: 'ES', zh: '中文', fr: 'FR', de: 'DE', it: 'IT', ja: 'JP' };
    container.innerHTML = '';
    Object.entries(langs).forEach(([code, name]) => {
        const btn = document.createElement('button');
        btn.innerText = name;
        btn.dataset.lang = code;
        btn.className = `lang-btn ${currentLang === code ? 'active' : ''} bg-white/10 hover:bg-gold/30 px-2 py-1 rounded-full text-sm transition`;
        btn.onclick = () => setLanguage(code);
        container.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderLangButtons();
    setLanguage(currentLang);
});
