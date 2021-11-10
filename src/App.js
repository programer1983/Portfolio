import Intro from "./components/intro/Intro";
import About from "./components/about/About"
import ProductList from "./components/productList/ProductList";


const App = () => {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
    </div>
  );
}

export default App

