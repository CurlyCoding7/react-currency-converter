import { useState } from 'react'
import './App.css'
import CurrencyCard from './components/CurrencyCard'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div className='home'>
      <div className="container">
        <CurrencyCard 
         label="From"
         amount={amount}
         currencyOptions={options}
         onCurrencyChange={(currency) => setFrom(currency)}
         onAmountChange={(amount) => setAmount(amount)}
         selectCurrency={from}
        />
        <button onClick={swap} id='swap-btn'>Swap</button>
        <CurrencyCard 
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={to}
                  isAmountDisabled={true}
        />
        <button onClick={convert} id='convert-btn'>Convert from {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>

    </div>
  )
}

export default App
