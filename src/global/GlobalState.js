import React, { useState } from "react";
import GlobalStateContext from "../contexts/GlobalStateContext";

const GlobalState = (props) => {
  const [rangeVal, setRangeVal] = useState([0, 5000]);
  const [sliderPrices, setsliderPrices] = useState([30, 40]);
  const updateSliderRange = (e, data) => {
    setsliderPrices(data);
  };

  const priceRangeRadioClick = () => {
    const rates = document.getElementsByName("radio-btn");
    let rate_value;
    for (var i = 0; i < rates.length; i++) {
      if (rates[i].checked) {
        rate_value = rates[i].value.split(',');  
        setRangeVal(rate_value);
        setsliderPrices(rate_value);  
      }
    }
  };

  const data = {
    rangeVal,
    setRangeVal,
    sliderPrices,
    setsliderPrices,
    updateSliderRange,
    priceRangeRadioClick,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
