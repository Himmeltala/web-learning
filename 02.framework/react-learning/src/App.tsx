import { useState } from "react";
import { products } from "./assets/data/product-list";
import BottomMenu from "./components/BottomMenu";
import ProductList from "./components/ProductList";

function App() {
  const [trolleyList, setTrolleyList] = useState<IProductList[]>([]);
  const [productList, setProductList] = useState(products);

  function handleInsert(newVal: IProductList) {
    setTrolleyList([...trolleyList, newVal]);
  }

  return (
    <div>
      <ProductList productList={productList} onInsert={handleInsert} />
      <BottomMenu trolleyList={trolleyList} />
    </div>
  );
}

export default App;
