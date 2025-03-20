import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import AmountTitle from "./AmountTitle.jsx";
import FilterButton from "./FilterButton.jsx";
import reportIcon from "./assets/report.svg"
import sendIcon from "./assets/send.svg"
import { useMemo } from "react";

export default function FiatInvestments(){
    const investmentDatas = useLoaderData();


    const currencyOption = (
        <select
          name="currency"
          className="select-dropdown"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="NGN">NGN</option>
        </select>
      );

      //Optimize calculation
      const totalFiatInvestments = useMemo(
        () => 
        investmentDatas.reduce(
            (sum, investmentData) => sum + Number(investmentData.amount),
            0
        ).toLocaleString(),
        [investmentDatas.map((data)=> data.amount)]
      );
        
    
    return(
        <div>
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                    <FilterButton btnText={`Filter Applied:${3}`} />
                </div>

                <AmountTitle 
                componentTitle="Total Fiat Investments" 
                amountOfMoney= {totalFiatInvestments}
                selectOptions={currencyOption} />
            </div>
            <div className="amount-list-and-report-container">
                <div className="amount-lists">
                    {investmentDatas.map((investmentData, index)=>(
                        <div key={index}>
                            <AmountList 
                            amount={`$${Number(investmentData.amount).toLocaleString()}`} 
                            date={investmentData.date}/>
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

export const fiatInvestmentLoader = async ()=>{
    const response =await fetch("http://localhost:3000/investments")
    return response.json()
}