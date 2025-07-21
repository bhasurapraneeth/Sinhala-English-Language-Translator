// Language configuration
const languages = {
    si: { name: 'Sinhala', flag: '🇱🇰' },
    en: { name: 'English', flag: '🇺🇸' }
};

// Current language state
let currentState = {
    sourceLang: 'si',
    targetLang: 'en'
};

// Mock translation data
const translations = {
    'si-en': {
        'හෙලෝ': 'Hello',
        'ආයුබෝවන්': 'Hello',
        'ස්තූතියි': 'Thank you',
        'මගේ නම': 'My name',
        'කොහොමද': 'How are you',
        'හොඳයි': 'Good',
        'කාලගුණය': 'Weather',
        'ප්‍රේම': 'Love',
        'මිත්‍ර': 'Friend',
        'ඔව්': 'Yes',
        'නැහැ': 'No'
    },
    'en-si': {
        'hello': 'හෙලෝ',
        'thank you': 'ස්තූතියි',
        'my name': 'මගේ නම',
        'how are you': 'කොහොමද',
        'good': 'හොඳයි',
        'weather': 'කාලගුණය',
        'love': 'ප්‍රේම',
        'friend': 'මිත්‍ර',
        'yes': 'ඔව්',
        'no': 'නැහැ'
    }
};

// DOM elements
const sourceText = document.getElementById('source-text');
const translatedTextContainer = document.getElementById('translated-text');
const translationPlaceholder = document.getElementById('translation-placeholder');
const loadingIndicator = document.getElementById('loading-indicator');
const translationResult = document.getElementById('translation-result');
const sourceCount = document.getElementById('source-count');
const targetCount = document.getElementById('target-count');
const clearBtn = document.getElementById('clear-text');
const copyBtn = document.getElementById('copy-text');
const swapBtn = document.getElementById('swap-languages');
const sourceLangElement = document.getElementById('source-lang');
const targetLangElement = document.getElementById('target-lang');
const sourceFlagElement = document.getElementById('source-flag');
const targetFlagElement = document.getElementById('target-flag');
const examplesGrid = document.getElementById('examples-grid');

// Mock translation function
function mockTranslate(text, fromLang, toLang) {
    if (!text.trim()) return '';
    
    const key = `${fromLang}-${toLang}`;
    const translationMap = translations[key] || {};
    
    // Check for exact matches first
    const lowerText = text.toLowerCase();
    if (translationMap[lowerText]) {
        return translationMap[lowerText];
    }

    // Check for partial matches
    for (const [original, translation] of Object.entries(translationMap)) {
        if (lowerText.includes(original)) {
            return translation;
        }
    }

    // Default response for demo
    return `[Translation: ${text}]`;
}

// Update UI based on current language state
function updateLanguageUI() {
    const sourceLang = languages[currentState.sourceLang];
    const targetLang = languages[currentState.targetLang];
    
    sourceLangElement.textContent = sourceLang.name;
    targetLangElement.textContent = targetLang.name;
    sourceFlagElement.textContent = sourceLang.flag;
    targetFlagElement.textContent = targetLang.flag;
    
    // Update placeholder
    sourceText.placeholder = `Enter text in ${sourceLang.name}...`;
    
    // Update font family for source text area
    if (currentState.sourceLang === 'si') {
        sourceText.style.fontFamily = "'Noto Sans Sinhala', system-ui, sans-serif";
    } else {
        sourceText.style.fontFamily = "system-ui, sans-serif";
    }
    
    // Update examples
    updateExamples();
}

// Update examples based on current source language
function updateExamples() {
    const examples = [
        { si: 'ආයුබෝවන්', en: 'Hello' },
        { si: 'ස්තූතියි', en: 'Thank you' },
        { si: 'කොහොමද', en: 'How are you' },
        { si: 'හොඳයි', en: 'Good' }
    ];
    
    examplesGrid.innerHTML = '';
    
    examples.forEach(example => {
        const btn = document.createElement('button');
        btn.className = 'example-btn';
        btn.dataset.si = example.si;
        btn.dataset.en = example.en;
        btn.textContent = currentState.sourceLang === 'si' ? example.si : example.en;
        btn.addEventListener('click', () => {
            sourceText.value = btn.textContent;
            handleTranslate(btn.textContent);
        });
        examplesGrid.appendChild(btn);
    });
}

// Handle translation
async function handleTranslate(text) {
    if (!text.trim()) {
        showPlaceholder();
        updateCharCount('', 'target');
        copyBtn.style.display = 'none';
        return;
    }

    showLoading();
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const translation = mockTranslate(text, currentState.sourceLang, currentState.targetLang);
    showTranslation(translation);
    updateCharCount(translation, 'target');
    copyBtn.style.display = 'flex';
}

// Show placeholder
function showPlaceholder() {
    translationPlaceholder.style.display = 'block';
    loadingIndicator.style.display = 'none';
    translationResult.style.display = 'none';
    translatedTextContainer.classList.remove('has-content', 'sinhala-content');
}

// Show loading state
function showLoading() {
    translationPlaceholder.style.display = 'none';
    loadingIndicator.style.display = 'flex';
    translationResult.style.display = 'none';
    translatedTextContainer.classList.remove('has-content', 'sinhala-content');
}

// Show translation result
function showTranslation(translation) {
    translationPlaceholder.style.display = 'none';
    loadingIndicator.style.display = 'none';
    translationResult.style.display = 'block';
    translationResult.textContent = translation;
    
    translatedTextContainer.classList.add('has-content');
    
    // Apply appropriate font family
    if (currentState.targetLang === 'si') {
        translatedTextContainer.classList.add('sinhala-content');
    } else {
        translatedTextContainer.classList.remove('sinhala-content');
    }
}

// Update character count
function updateCharCount(text, type) {
    const count = text.length;
    const element = type === 'source' ? sourceCount : targetCount;
    element.textContent = `${count} character${count !== 1 ? 's' : ''}`;
}

// Copy to clipboard
async function copyToClipboard() {
    const text = translationResult.textContent;
    if (!text) return;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Update button to show success
        const copyIcon = copyBtn.querySelector('.copy-icon');
        const checkIcon = copyBtn.querySelector('.check-icon');
        const copyText = copyBtn.querySelector('.copy-text');
        
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'block';
        copyText.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(() => {
            copyIcon.style.display = 'block';
            checkIcon.style.display = 'none';
            copyText.textContent = 'Copy';
            copyBtn.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}

// Clear all text
function clearText() {
    sourceText.value = '';
    showPlaceholder();
    updateCharCount('', 'source');
    updateCharCount('', 'target');
    clearBtn.style.display = 'none';
    copyBtn.style.display = 'none';
}

// Swap languages
function swapLanguages() {
    // Swap language codes
    const tempLang = currentState.sourceLang;
    currentState.sourceLang = currentState.targetLang;
    currentState.targetLang = tempLang;
    
    // Update UI
    updateLanguageUI();
    
    // Swap texts if both exist
    const currentSourceText = sourceText.value;
    const currentTranslation = translationResult.textContent;
    
    if (currentTranslation && currentTranslation !== '[Translation: ' + currentSourceText + ']') {
        sourceText.value = currentTranslation;
        handleTranslate(currentTranslation);
    } else {
        sourceText.value = '';
        showPlaceholder();
        updateCharCount('', 'source');
        updateCharCount('', 'target');
        clearBtn.style.display = 'none';
        copyBtn.style.display = 'none';
    }
}

// Event listeners
sourceText.addEventListener('input', (e) => {
    const text = e.target.value;
    updateCharCount(text, 'source');
    
    if (text.trim()) {
        clearBtn.style.display = 'flex';
        handleTranslate(text);
    } else {
        clearBtn.style.display = 'none';
        showPlaceholder();
        updateCharCount('', 'target');
        copyBtn.style.display = 'none';
    }
});

clearBtn.addEventListener('click', clearText);
copyBtn.addEventListener('click', copyToClipboard);
swapBtn.addEventListener('click', swapLanguages);

// Initialize the application
function init() {
    updateLanguageUI();
    showPlaceholder();
    updateCharCount('', 'source');
    updateCharCount('', 'target');
}

// Start the application
init();