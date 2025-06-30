# 🚀 React Practice Projects Collection

A comprehensive collection of React components and mini-projects built for learning and practice purposes. Each component demonstrates different React concepts and patterns.

## 📋 Table of Contents

- [Overview](#overview)
- [Components](#components)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This repository contains a variety of React components and mini-projects that showcase different aspects of React development, from basic state management to complex UI interactions. Each component is self-contained and can be used as a reference or starting point for larger applications.

## 🧩 Components

### 1. 📦 [Load More Data](./src/components/load_more/)
- **Description**: Infinite scroll/pagination component that fetches products from an API
- **Features**: 
  - API integration with dummyjson.com
  - Pagination with "Load More" button
  - Loading states and error handling
  - Product grid display
- **Tech Stack**: React Hooks, Fetch API, CSS

### 2. 🖼️ [Image Slider](./src/components/image_slider/)
- **Description**: Carousel component for displaying images with navigation
- **Features**:
  - Dynamic image loading from API
  - Navigation arrows
  - Circle indicators
  - Loading and error states
- **Tech Stack**: React Hooks, React Icons, Fetch API

### 3. ⭐ [Star Rating](./src/components/star_rat/)
- **Description**: Interactive star rating component with hover effects
- **Features**:
  - Clickable star ratings
  - Hover effects for better UX
  - Customizable number of stars
  - Visual feedback
- **Tech Stack**: React Hooks, React Icons, CSS

### 4. 🎨 [Random Color Generator](./src/components/random_colour/)
- **Description**: Color generator that creates random HEX and RGB colors
- **Features**:
  - HEX and RGB color generation
  - Full-screen color display
  - Color format switching
  - Real-time color preview
- **Tech Stack**: React Hooks, JavaScript Math functions

### 5. 📚 [Accordion](./src/components/accodian/)
- **Description**: Collapsible content component with single and multi-selection modes
- **Features**:
  - Single and multi-selection modes
  - FAQ-style content display
  - Smooth expand/collapse animations
  - Toggle between modes
- **Tech Stack**: React Hooks, CSS, Local data

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ash-D3v/practice-react-projects.git
   cd practice-react-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Hooks** - State management and side effects
- **React Icons** - Icon library
- **CSS** - Styling
- **Fetch API** - HTTP requests
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
practice-react-projects/
├── README.md
├── package.json
├── public/
├── src/
│   ├── components/
│   │   ├── load_more/
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── image_slider/
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── star_rat/
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── random_colour/
│   │   │   └── index.jsx
│   │   └── accodian/
│   │       ├── index.jsx
│   │       ├── style.css
│   │       └── data.js
│   ├── App.js
│   └── index.js
└── README.md
```

## 🎨 Features

- **Modular Design**: Each component is self-contained and reusable
- **Responsive**: Components work across different screen sizes
- **Accessible**: Built with accessibility best practices
- **Well Documented**: Comprehensive comments and documentation
- **Error Handling**: Proper error states and loading indicators

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) for the project setup
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [DummyJSON](https://dummyjson.com/) for the API data

## 📞 Contact

- **GitHub**: [@Ash-D3v](https://github.com/Ash-D3v)
- **Repository**: [practice-react-projects](https://github.com/Ash-D3v/practice-react-projects)

---

⭐ **Star this repository if you found it helpful!** ⭐

---

## 🔮 To Be Continued...

This is an ongoing project with more components and features planned:

- [ ] 🔍 Search Component
- [ ] 📊 Data Visualization Components
- [ ] 🎮 Game Components
- [ ] 📱 Mobile-First Components
- [ ] 🌐 API Integration Examples
- [ ] 🎯 Advanced State Management
- [ ] 🧪 Testing Examples
- [ ] 🚀 Performance Optimizations

**Stay tuned for more exciting React components!** 🚀
