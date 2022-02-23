import "./App.css";
import Header from "./Components/Header";
import OverlayBody from "./Components/OverlayBody";
import Specifics from "./Components/Specifics";
import ProductCards from "./Components/ProductCards";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div id="scrollLayout" className="box-layout-wrap ">
        <Header />
        <OverlayBody />
        <Specifics />
        <ProductCards />
        <Footer />
      </div>
    </div>
  );
}

export default App;
