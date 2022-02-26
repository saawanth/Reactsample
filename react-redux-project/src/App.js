import Header from "./containers/Header";
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route> 404 not Found </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
