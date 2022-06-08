import React, { useState, useEffect } from "react";
import CurrencySelector from "./CurrencySelector";
import DisplayData from "./DisplayData";
import Footer from "./Footer";
import { AppContainer, Heading } from "./StyledComponents";

const App = () => {
  // define state using hooks = constructor in class components
  const initialCurrency = "AUD";
  const [currency, setCurrency] = useState(initialCurrency);
  const [bitcoinData, setBitcoinData] = useState({});
  const url = "https://api.coindesk.com/v1/bpi/historical/close.json?currency=";

  const getData = async () => {
    const response = await fetch(`${url}${currency}`);
    const data = await response.json();
    setBitcoinData(data.bpi);
  };
  useEffect(() => {
    getData();
  }, [currency]);

  const handleCurrency = (value) => {
    console.log(value);
    setCurrency(value);
  };

  return (
    <AppContainer>
      <Heading>Bitcoin Tracker {currency ? `in ${currency}` : null}</Heading>
      <CurrencySelector currency={currency} handleCurrency={handleCurrency} />
      <DisplayData bitcoinData={bitcoinData} />
      <Footer />
    </AppContainer>
  );
};

export default App;
