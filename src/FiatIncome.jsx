import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import AmountTitle from "./AmountTitle.jsx";
import FilterButton from "./FilterButton.jsx";
import reportIcon from "./assets/report.svg"
import sendIcon from "./assets/send.svg"
import { useEffect, useMemo, useState } from "react";

export default function FiatIncome(){
    const amountDatas = useLoaderData();
    const [currencyValue, setCurrencyValue] = useState("USD")
    const [rates, setRates] = useState({})
    const apiKey = "ddb0785357eb58b714a8ee40";
    const endpoint = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

    useEffect(()=>{
        async function fetchRates(){
            try {
                const response = await fetch(endpoint);
                const data = await response.json()

                if(data.result === "success"){
                    setRates(data.conversion_rates || {})
                } else{
                    console.error("Failed to fetch exchange rates:", data)
                }
            }   catch(error){
                    console.error("Error fetching exchange rates:", error)
                } 
            }
            fetchRates()
    }, [endpoint]);

    // console.log(currencyValue)

    const handleCurrencyChange = (event) => {
        const { value } = event.target;
    
        setCurrencyValue(value);
      };

    const currencyOption = (
        <select
          name="currency"
          className="select-dropdown"
          value={currencyValue}
          onChange={handleCurrencyChange}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="NGN">NGN</option>
        </select>
      );

      const totalFiatIncome = useMemo(
        () => 
        amountDatas.reduce(
            (sum, amountData) => sum + Number(amountData.amount),
            0
        ),
        [amountDatas]
      );
        
      //calc Total conversion based on currency selected
      const convertedTotalFiatIncome = useMemo(() => {
        if (!rates[currencyValue]) {
          return totalFiatIncome.toLocaleString()
        }
    
        const currencyExchangeRate = rates[currencyValue]
        const convertedAmount = totalFiatIncome * currencyExchangeRate
    
        return Math.floor(convertedAmount).toLocaleString()
      }, [currencyValue, totalFiatIncome, rates])
    
    return(
        <div>
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                    <FilterButton btnText={`Filter Applied:${3}`} />
                </div>

                <AmountTitle 
                componentTitle="Total Fiat Income" 
                amountOfMoney= {convertedTotalFiatIncome}
                selectOptions={currencyOption} />
            </div>
            <div className="amount-list-and-report-container">
                <div className="amount-lists">
                    {amountDatas.map((data, index)=>(
                        <div key={index}>
                            <AmountList 
                            amount={`$${data.amount.toLocaleString()}`} date={data.date}/>
                        </div>
                    ))}
                </div>
            </div>

            <div className="report-and-inputfield-container">
                <div className="download-report-container">
                    <div className="download-report-button">
                        <p>Download Report</p>
                        <img src={reportIcon} alt="report" />
                    </div>
                </div>
            
                <div className="inputfield-container">
                    <input type="text" placeholder="Talk to our AI finance expert"/>
                    <div className="send-icon-container">
                        <img src={sendIcon} alt="send" />
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export const fiatIncomeLoader = async ()=>{
    const response =await fetch("http://localhost:3000/income")
    return response.json()
}