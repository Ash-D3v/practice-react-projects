import { useEffect, useState } from "react";
import "./style.css";

/**
 * LoadMoreData Component
 * Fetches and displays products with pagination functionality
 * Allows users to load more products by clicking a button
 */
export default function LoadMoreData() {
  // State for loading indicator
  const [loading, setLoading] = useState(false);
  // State to store fetched products
  const [products, setProducts] = useState([]);
  // State to track current page count
  const [count, setCount] = useState(0);
  // State to disable load more button when limit reached
  const [disableButton, setDisableButton] = useState(false);

  /**
   * Fetches products from the API with pagination
   * Uses dummyjson.com API to get product data
   */
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
      return; // Added missing return statement
    }
  }

  // Fetch products when count changes
  useEffect(() => {
    fetchProducts();
  }, [count]);

  // Disable button when 100 products are loaded
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  // Loading state display
  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}