function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value) + '; path=/; max-age=31536000; SameSite=Lax';
}

let currentQuestion = -1;
let currentLang = getCookie('lang') || 'pt';
let currentTheme = getCookie('theme') || 'auto';

const savedCategories = getCookie('categories');
const activeCategories = savedCategories
    ? new Set(savedCategories.split(',').filter(c => categories.includes(c)))
    : new Set(categories);
if (activeCategories.size === 0) categories.forEach(c => activeCategories.add(c));

const questionElement = document.getElementById('question');
const btnElement = document.getElementById('btn');

const footerLink = document.getElementById('footer-link');
const langDropdown = document.getElementById('lang-dropdown');
const langTrigger = document.getElementById('lang-trigger');
const langMenu = document.getElementById('lang-menu');
const categoriesContainer = document.getElementById('categories');

const themeDropdown = document.getElementById('theme-dropdown');
const themeTrigger = document.getElementById('theme-trigger');
const themeMenu = document.getElementById('theme-menu');

function saveCategories() {
    setCookie('categories', [...activeCategories].join(','));
}

function renderCategories() {
    categoriesContainer.innerHTML = '';
    for (const id of categories) {
        const chip = document.createElement('button');
        chip.className = 'category-chip' + (activeCategories.has(id) ? ' active' : '');
        chip.textContent = ui[currentLang].categories[id];
        chip.onclick = () => toggleCategory(id);
        categoriesContainer.appendChild(chip);
    }
}

function toggleCategory(id) {
    if (activeCategories.has(id)) {
        if (activeCategories.size <= 1) return;
        activeCategories.delete(id);
    } else {
        activeCategories.add(id);
    }
    saveCategories();
    renderCategories();
    currentQuestion = -1;
    pickQuestion();
}

function getFilteredIndices() {
    return questions
        .map((q, i) => activeCategories.has(q.category) ? i : -1)
        .filter(i => i !== -1);
}

const supportedLangs = ['pt', 'en', 'es', 'fr', 'zh'];
const langLabels = { pt: 'Português', en: 'English', es: 'Español', fr: 'Français', zh: '中文' };
const langHtmlAttrs = { pt: 'pt-BR', en: 'en', es: 'es', fr: 'fr', zh: 'zh' };

function renderLangMenu() {
    langMenu.innerHTML = '';
    for (const lang of supportedLangs) {
        const item = document.createElement('button');
        item.className = 'lang-dropdown-item' + (lang === currentLang ? ' selected' : '');
        item.textContent = langLabels[lang];
        item.onclick = (e) => {
            e.stopPropagation();
            setLanguage(lang);
            closeLangMenu();
        };
        langMenu.appendChild(item);
    }
}

function closeLangMenu() {
    langDropdown.classList.remove('open');
}

langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    closeThemeMenu();
    langDropdown.classList.toggle('open');
    if (langDropdown.classList.contains('open')) renderLangMenu();
});

const themeIds = ['auto', 'light', 'dark', 'ocean', 'sunset', 'lavender'];
const themeDotColors = {
    auto: null,
    light: '#ffffff',
    dark: '#111111',
    ocean: '#3498db',
    sunset: '#e67e22',
    lavender: '#9b59b6'
};

function applyTheme(theme) {
    if (theme === 'auto') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

function renderThemeMenu() {
    themeMenu.innerHTML = '';
    for (const id of themeIds) {
        const item = document.createElement('button');
        item.className = 'theme-dropdown-item' + (id === currentTheme ? ' selected' : '');

        const dotColor = themeDotColors[id];
        if (dotColor) {
            const dot = document.createElement('span');
            dot.className = 'theme-dot';
            dot.style.background = dotColor;
            if (id === 'light') dot.style.border = '1px solid #ccc';
            item.appendChild(dot);
        }

        const label = document.createTextNode(ui[currentLang].themes[id]);
        item.appendChild(label);

        item.onclick = (e) => {
            e.stopPropagation();
            setTheme(id);
            closeThemeMenu();
        };
        themeMenu.appendChild(item);
    }
}

function closeThemeMenu() {
    themeDropdown.classList.remove('open');
}

function setTheme(theme) {
    currentTheme = theme;
    setCookie('theme', theme);
    applyTheme(theme);
    themeTrigger.textContent = ui[currentLang].themes[theme] + ' ▾';
}

themeTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    closeLangMenu();
    themeDropdown.classList.toggle('open');
    if (themeDropdown.classList.contains('open')) renderThemeMenu();
});

document.addEventListener('click', () => {
    closeLangMenu();
    closeThemeMenu();
});

function setLanguage(lang) {
    currentLang = lang;
    setCookie('lang', lang);

    document.documentElement.lang = langHtmlAttrs[lang];
    document.title = ui[lang].title;
    btnElement.textContent = ui[lang].btn;

    footerLink.textContent = ui[lang].footer;
    langTrigger.textContent = langLabels[lang] + ' ▾';
    themeTrigger.textContent = ui[lang].themes[currentTheme] + ' ▾';

    renderCategories();
    currentQuestion = -1;
    pickQuestion();
}

function pickQuestion() {
    const indices = getFilteredIndices();
    let next;
    do {
        next = indices[Math.floor(Math.random() * indices.length)];
    } while (next === currentQuestion && indices.length > 1);

    currentQuestion = next;

    questionElement.classList.remove('enter');
    questionElement.classList.add('exit');

    setTimeout(() => {
        questionElement.textContent = questions[next].i18n[currentLang];
        questionElement.classList.remove('exit');
        questionElement.classList.add('enter');
    }, 150);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        btnElement.classList.add('active');
        pickQuestion();
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        btnElement.classList.remove('active');
    }
});

applyTheme(currentTheme);
setLanguage(currentLang);
