import { useState } from "react";
import "./App.css";
import Banner from "./Components/header/Banner";
import Navbar from "./Components/header/Navbar";
import Players from "./Components/main/Players";
import Footer from "./Components/footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);
  const handleClaimCoin = () => {
    setCoin(coin + 5000000);
  };
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>
      <Players coin={coin}></Players>
      <Footer></Footer>
    </>
  );
}

export default App;
