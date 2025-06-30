# 📚 Accordion Component

A versatile and reusable React accordion component that allows for collapsible content sections. It supports both single and multi-selection modes, making it ideal for FAQs, navigation menus, and structured content display.

## 🎯 Overview

This component provides a clean and intuitive way to present information in a limited space. Users can click on an item's title to expand or collapse its content. The component can be configured to allow only one item to be open at a time (single-selection) or multiple items (multi-selection).

## ✨ Features

- ↕️ **Collapsible Sections**: Expand and collapse content with a click.
- ☝️ **Single-Selection Mode**: Only one item can be open at a time.
- 📋 **Multi-Selection Mode**: Multiple items can be open simultaneously.
- 🔄 **Mode Toggle**: Easily switch between single and multi-selection modes.
- 📦 **Data-Driven**: Content is rendered from a local data file.
- 📱 **Responsive Design**: Adapts to various screen sizes.
- 🎨 **Simple Styling**: Clean and easy-to-customize CSS.

## 🛠️ Technologies Used

- **React Hooks**: `useState`
- **JavaScript**: Core logic for selection modes.
- **CSS**: For styling the accordion items and layout.

## 📁 File Structure

```
accodian/
├── index.jsx      # Main component logic
├── data.js        # Data source for accordion items
├── style.css      # Component styles
└── README.md      # This file
```

## 🚀 Usage

### Basic Implementation

```jsx
import Accordian from './components/accodian';

function App() {
  return (
    <div className="App">
      <Accordian />
    </div>
  );
}
```

### Component Props

This component does not accept any props as it is self-contained and uses a local `data.js` file for its content.

## 🔧 How It Works

### 1. State Management

```jsx
// Tracks the ID of the selected item in single-selection mode.
const [selected, setSelected] = useState(null);

// A boolean flag to enable or disable multi-selection mode.
const [enableMultiSelection, setEnableMultiSelection] = useState(false);

// An array to store the IDs of selected items in multi-selection mode.
const [multiple, setMultiple] = useState([]);
```

### 2. Selection Logic

#### `handleSingleSelection(getCurrentId)`
- **Purpose**: Manages accordion state in single-selection mode.
- **Logic**:
  - If the clicked item is already `selected`, it closes it by setting `selected` to `null`.
  - Otherwise, it sets `selected` to the `getCurrentId`, opening the new item and closing any other.

#### `handleMultiSelection(getCurrentId)`
- **Purpose**: Manages accordion state in multi-selection mode.
- **Logic**:
  - It checks if the `getCurrentId` is already in the `multiple` array.
  - If it's not present, it adds the ID to the array (opening the item).
  - If it is present, it removes the ID from the array (closing the item).

### 3. Rendering Content

The component maps over the `data` array and renders each item. The visibility of the content (`.acc-content`) is conditionally determined based on the current mode and state:

- **In Multi-Selection Mode**: Content is shown if `dataItem.id` is found in the `multiple` array.
- **In Single-Selection Mode**: Content is shown if `dataItem.id` matches the `selected` state.

```jsx
{enableMultiSelection
  ? multiple.indexOf(dataItem.id) !== -1 && (
      <div className="acc-content ">{dataItem.answer}</div>
    )
  : selected === dataItem.id && (
      <div className="acc-content ">{dataItem.answer}</div>
    )}
```

## 📊 Data Structure (`data.js`)

The component expects an array of objects with the following structure:

```javascript
const data = [
  {
    id: '1',
    question: "What are accordion components?",
    answer: "Accordion components are user interface elements..."
  },
  // ...more items
];

export default data;
```

## 🔮 Future Enhancements

- [ ] **Animations**: Add smooth CSS transitions for opening and closing items.
- [ ] **Customizable Icons**: Allow users to specify different icons for open/closed states.
- [ ] **Props-based Data**: Pass data via props instead of importing it locally.
- [ ] **Callback Functions**: Add `onOpen` or `onClose` callback props.
- [ ] **Accessibility (ARIA)**: Implement ARIA attributes for better accessibility.
- [ ] **Nested Accordions**: Support for accordions within accordions.
- [ ] **Search/Filter**: Add a search bar to filter accordion items.
- [ ] **Default Open Items**: Allow specifying which items should be open by default.

## 🤝 Contributing

Feel free to contribute by:
- Adding any of the future enhancements.
- Improving the existing code and styling.
- Adding tests to ensure reliability.

## 📞 Support

For questions or issues, please open an issue in the project's repository.

---

⭐ **Star this component if you found it helpful!** ⭐ 