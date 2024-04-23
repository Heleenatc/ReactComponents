import { useEffect, useState } from "react";
import "./styles.css";

// refer dummyjson.com/docs/products

export default function LoadMoreData() {
  const [loading, setLoading] = useState(0);
  const [products, setProducts] = useState([]);
  // no. of times the Load More button is clicked. To check whether we have reached the last set of products
  const [clickCount, setClickCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${clickCount === 0 ? 0 : clickCount * 20}`
      );
      //no need to set skip count in the first page. In the subsequent pages skip all previous data
      const result = await response.json();

      if (result && result.products && result.products.length) {
        //when count is 0 (first page), there is no previous data. Append current data with the previous data for the consecutive pages
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(`Error occured ${e}`);
      setLoading(false);
    }
  }

  useEffect(() => {
      fetchProducts();
    console.log(clickCount);
  }, [clickCount]);


  // Ref: D:\heleena\2024\react\projects\src\index.js 
  // Made changes in the above file to prevent useEffect from being called twice (duplicate key problem)
  // Removed <React.StrictMode></React.StrictMode>
  // Still there is issue on the first load - useEffect is not called.
  // Working in reload
  // Have to fix later
  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading Data! Please wait...</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title}></img>
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton}
          onClick={() => setClickCount(clickCount + 1)}
        >
          Load More Products
        </button>
        {disableButton ? <p>All 100 products are loaded!</p> : null}
      </div>
    </div>
  );
}
