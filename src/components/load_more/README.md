# 📦 Load More Data Component

A React component that implements infinite scroll/pagination functionality to load products from an API with a "Load More" button.

## 🎯 Overview

This component demonstrates how to implement pagination in React using the Fetch API. It fetches products from the [DummyJSON API](https://dummyjson.com/) and displays them in a responsive grid layout. Users can load more products by clicking the "Load More" button until they reach the maximum limit of 100 products.

## ✨ Features

- 🔄 **Pagination**: Load products in batches of 20
- 📱 **Responsive Design**: Works on all screen sizes
- ⏳ **Loading States**: Shows loading indicator during API calls
- 🚫 **Error Handling**: Gracefully handles API errors
- 🎯 **Limit Control**: Automatically disables button after 100 products
- 🖼️ **Product Display**: Shows product thumbnails and titles

## 🛠️ Technologies Used

- **React Hooks**: `useState`, `useEffect`
- **Fetch API**: For HTTP requests
- **CSS**: Custom styling
- **DummyJSON API**: For product data

## 📁 File Structure

```
load_more/
├── index.jsx      # Main component file
├── style.css      # Component styles
└── README.md      # This file
```

## 🚀 Usage

### Basic Implementation

```jsx
import LoadMoreData from './components/load_more';

function App() {
  return (
    <div className="App">
      <LoadMoreData />
    </div>
  );
}
```

### Component Props

This component doesn't accept any props as it's self-contained with its own API integration.

## 🔧 How It Works

### 1. State Management

```jsx
const [loading, setLoading] = useState(false);        // Loading indicator
const [products, setProducts] = useState([]);         // Product data
const [count, setCount] = useState(0);                // Page counter
const [disableButton, setDisableButton] = useState(false); // Button state
```

### 2. API Integration

The component fetches data from the DummyJSON API:

```jsx
const response = await fetch(
  `https://dummyjson.com/products?limit=20&skip=${
    count === 0 ? 0 : count * 20
  }`
);
```

### 3. Pagination Logic

- **Initial Load**: Fetches first 20 products
- **Load More**: Fetches next 20 products based on `count` state
- **Skip Calculation**: `count * 20` determines how many products to skip
- **Limit**: Maximum 100 products (5 pages × 20 products)

### 4. Error Handling

```jsx
try {
  // API call logic
} catch (e) {
  console.log(e);
  setLoading(false);
  return;
}
```

## 🎨 Styling

The component uses custom CSS for styling:

- **Grid Layout**: Responsive product grid
- **Loading States**: Visual feedback during API calls
- **Button States**: Disabled state when limit reached
- **Responsive Design**: Adapts to different screen sizes

## 🔍 Key Functions

### `fetchProducts()`
- Makes API call to fetch products
- Handles loading states
- Updates products array with new data
- Manages error states

### `useEffect` Hooks
- **First Effect**: Triggers API call when `count` changes
- **Second Effect**: Disables button when 100 products are loaded

## 📊 API Response Structure

The component expects the following API response structure:

```json
{
  "products": [
    {
      "id": 1,
      "title": "Product Name",
      "thumbnail": "image-url.jpg"
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 20
}
```

## 🎯 Performance Considerations

- **Efficient Rendering**: Uses React's key prop for optimal re-rendering
- **Memory Management**: Properly manages state updates
- **API Optimization**: Uses pagination to limit data transfer

## 🐛 Common Issues & Solutions

### Issue: Button not disabling
**Solution**: Check if the products array length reaches 100

### Issue: Loading state stuck
**Solution**: Ensure proper error handling in catch block

### Issue: Products not loading
**Solution**: Verify API endpoint and network connectivity

## 🔮 Future Enhancements

- [ ] **Infinite Scroll**: Replace button with scroll-based loading
- [ ] **Search Functionality**: Add product search
- [ ] **Filtering**: Add category/product type filters
- [ ] **Caching**: Implement data caching for better performance
- [ ] **Skeleton Loading**: Add skeleton screens for better UX

## 📝 Code Example

```jsx
// Example of how the component manages state
const [products, setProducts] = useState([]);

// Adding new products to existing array
setProducts((prevData) => [...prevData, ...result.products]);

// Checking if limit reached
if (products && products.length === 100) {
  setDisableButton(true);
}
```

## 🤝 Contributing

Feel free to contribute to this component by:
- Adding new features
- Improving error handling
- Enhancing the UI/UX
- Adding tests
- Optimizing performance

## 📞 Support

If you have any questions or issues with this component, please:
1. Check the existing issues
2. Create a new issue with detailed description
3. Provide code examples if possible

---

⭐ **Star this component if you found it helpful!** ⭐ 