import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import AmountTitle from "./AmountTitle.jsx";
import FilterButton from "./FilterButton.jsx";
import reportIcon from "./assets/report.svg";
import sendIcon from "./assets/send.svg";
import { useMemo } from "react";

export default function CryptoIncome(){

    const cryptoDatas = useLoaderData();
    const cryptoOption = (
        <select name="crypto" className="select-dropdown">
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </select>
      );

      const totalCryptoIncome = useMemo(
        () =>
          cryptoDatas.reduce(
            (sum, cryptoData) => sum + Number(cryptoData.crypto),
            0
          ),
        [cryptoDatas.map((data) => data.amountCrypto)]
      );
    
    
    return(
        <div>
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                    <FilterButton btnText={`Filter Applied:${3}`} />
                </div>

                <AmountTitle 
                componentTitle="Total Crypto Income" amountOfMoney= {totalCryptoIncome}
                selectOptions={cryptoOption}
                amountOfMoneyStyle={{ color:"#F7931A" }}
                />
            </div>
            <div className="amount-list-and-report-container">
                <div className="amount-lists">
                    {cryptoDatas.map((data, index)=>(
                        <div key={index}>
                            <AmountList 
                            amount={`${data.crypto} BTC`} 
                            date={data.date}/>
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

export const cryptoIncomeLoader = async ()=>{
    const response =await fetch("http://localhost:3000/income")
    return response.json()
}