# Sinhala-English Language Translator

A beautiful, modern web application for translating between Sinhala and English languages. Built with pure HTML, CSS, and JavaScript for optimal performance and compatibility.


<img width="1893" height="921" alt="Screenshot 2025-07-21 170808" src="https://github.com/user-attachments/assets/842bd8e2-4563-4e6b-b338-161a2e2bb45e" />


## ✨ Features

- **Bi-directional Translation** - Seamlessly translate between Sinhala and English
- **Language Swap** - Quick language switching with smooth animations
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI** - Glass-morphism effects with gradient backgrounds
- **Copy to Clipboard** - Easy copying of translated text
- **Quick Examples** - Pre-loaded example phrases for testing
- **Real-time Character Count** - Track text length as you type
- **Proper Typography** - Noto Sans Sinhala font for accurate Sinhala rendering

## 🚀 Demo

[Live Demo](https://your-username.github.io/sinhala-english-translator) *(Replace with your GitHub Pages URL)*

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality and translation logic
- **Google Fonts** - Noto Sans Sinhala for proper Sinhala text rendering

## 📦 Installation & Setup

### Option 1: Direct Download
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start translating!

### Option 2: Local Development Server
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sinhala-english-translator.git
   cd sinhala-english-translator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
sinhala-english-translator/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
├── package.json        # Project configuration and dependencies
└── README.md          # Project documentation
```

## 🎯 Usage

1. **Enter Text**: Type or paste text in the source language text area
2. **Auto-Translate**: Translation appears automatically in the target area
3. **Swap Languages**: Click the swap button to reverse translation direction
4. **Copy Result**: Use the copy button to copy translated text to clipboard
5. **Try Examples**: Click on example phrases for quick testing
6. **Clear Text**: Use the clear button to reset both text areas

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization

### Adding New Translations
Edit the `translations` object in `script.js`:

```javascript
const translations = {
    'si-en': {
        'your_sinhala_text': 'your_english_translation',
        // Add more translations...
    },
    'en-si': {
        'your_english_text': 'your_sinhala_translation',
        // Add more translations...
    }
};
```

### Styling Modifications
- **Colors**: Update CSS custom properties in `styles.css`
- **Fonts**: Modify font families in the CSS file
- **Layout**: Adjust grid and flexbox properties for different layouts

### API Integration
To integrate with a real translation API (Google Translate, Microsoft Translator, etc.), modify the `mockTranslate` function in `script.js`.

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎨 Design Features

- **Glass-morphism UI** with backdrop blur effects
- **Gradient backgrounds** for visual appeal
- **Smooth animations** and micro-interactions
- **Professional color scheme** with blue and teal accents
- **Accessible design** with proper contrast ratios
- **Modern typography** with system fonts and Sinhala support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Fonts** for providing Noto Sans Sinhala font
- **Lucide** for beautiful SVG icons (inspiration for custom SVGs)
- **Modern CSS techniques** for glass-morphism and gradient effects

## 📞 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - your.email@example.com

Project Link: [https://github.com/your-username/sinhala-english-translator](https://github.com/your-username/sinhala-english-translator)

---

⭐ **Star this repository if you found it helpful!**
