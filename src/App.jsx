import { useState } from "react";
import "./App.css";
import Banner from "./Components/header/Banner";
import Navbar from "./Components/header/Navbar";

function App() {
  const [coin, setCoin] = useState(0);
  const handleClaimCoin = () => {
    setCoin(coin + 5000000);
  };
  console.log(coin);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner handleClaimCoin={handleClaimCoin}></Banner>
    </>
  );
}

export default App;
