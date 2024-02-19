import React from "react";

function Input({
  className = "", // If user wants to add some extra classes for design
  label, // to or From as a lable 
  amount,
  OnAmountChange,
  OnCurrencyChange,
  currencyOptions=[],
  selectCurrency = "usd",
  amountDisabled = false, // for production grade application if we want to disable the amount 
  currencyDisabled = false, // for development grade application if want to disabled the currency option

}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e)=> OnAmountChange && OnAmountChange(Number(e.target.value))}
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e)=>OnCurrencyChange && OnCurrencyChange(e.target.value )}
        disabled={currencyDisabled}
        >
          {currencyOptions.map((currency)=>(
          <option key={currency.str} value={currency}
          >{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
