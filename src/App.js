import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NavbarBottom from "./components/NavbarBottom";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarBottom />
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Cart /> */}
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
