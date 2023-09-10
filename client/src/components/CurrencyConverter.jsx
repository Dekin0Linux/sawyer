import React,{useState} from 'react'

function CurrencyConverter() {
    const [fromValue,setFromValue] = useState('USD')
    const [toValue,setToValue] = useState('EUR')
    const [amount,setAmount] = useState(1)
    const [value,setValue] = useState(1)
    const [rate,setRate] = useState(0)
  
    const currencies = ["USD", "EUR", "GBP", "CAD"];
  
    const handleFromCurrency = (e)=>{
      setFromValue(e.target.value)
      console.log(e.target.value)
    }
  
    const handleToCurrency = (e)=>{
      setToValue(e.target.value)
      console.log(e.target.value)
    }
  
    const handleConvert=(e)=>{
      e.preventDefault()
      // api to convert currency
      fetch(`https://api.fastforex.io/convert?from=${fromValue}&api_key=f836299eef-1f2824aa53-rz0ylq&to=${toValue}&amount=${amount}`)
      .then(res=>res.json())
      .then(data=>{
        // setValue(parent(data.result.EUR))
        const convertedValue = data.result[toValue];
        setValue(convertedValue)
        setRate(data.result.rate)
      }).catch(err=>{
        setValue('Invalid Amount')
      })
  
    }

  return (
    <div className="bg-white p-5 shadow-md rounded-xl">
              <p className="font-semibold text-xl pb-5 text-slate-400">
                {"Currency Converter"}
              </p>

              <form onSubmit={handleConvert}>
                <p className='text-red-500 text-xl'>Rate : {rate}</p>
                <div className=" flex my-5">
                  <select value={fromValue} onChange={handleFromCurrency} name="currency" className="outline-0 p-2 border-2">
                    {currencies.map((currency) => (
                      <option key={currency} value={currency}>{currency}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    onChange={e=>setAmount(e.target.value)}
                    placeholder="Enter Amount"
                    className="flex-1 font-semibold text-lg p-2 rounded border-slate-100 border-2 outline-0"
                  />
                </div>

                <div className=" flex">
                  <select value={toValue} onChange={handleToCurrency} name="currency" className="outline-0 p-2 border-2">
                    {currencies.map((currency) => (
                      <option value={currency}>{currency}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Converted"
                    className="flex-1 font-semibold text-lg p-2 rounded border-slate-100 border-2 outline-0"
                    disabled
                    value={value}
                  />
                </div>
                

                <div>
                  <button
                    type="submit"
                    className="bg-[#0153fb] p-2 rounded-lg flex-1 shadow-lg w-full my-5 text-white text-xl"
                  >
                    Convert
                  </button>
                </div>
              </form>
            </div>
  )
}

export default CurrencyConverter