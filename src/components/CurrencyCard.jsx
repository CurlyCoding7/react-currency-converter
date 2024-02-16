
const CurrencyCard = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  isAmountDisabled = false
  

}) => {
  return (
    <div className="card">
        <div>
            <label htmlFor="input-amount">{label}</label>
            <input type="number" id="input-amount" value={amount} disabled={isAmountDisabled} onChange={e => onAmountChange &&
            onAmountChange(Number(e.target.value))} />
        </div>

        <div>
            <p>Currency Type</p>
            <select name="currency" value={selectCurrency}  onChange={e => onCurrencyChange &&
            onCurrencyChange(e.target.value)} >
                {
                  currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                  ))
                }
                
            </select>
        </div>

    </div>
  )
}

export default CurrencyCard