import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProductDetails from "./components/contents/ProductDetails";
import Products from "./components/contents/Products";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
