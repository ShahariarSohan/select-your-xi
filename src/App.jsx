import { useState } from "react";
import "./App.css";
import Banner from "./Components/header/Banner";
import Navbar from "./Components/header/Navbar";
import Players from "./Components/main/Players";

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
    </>
  );
}

export default App;
