import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import AmountTitle from "./AmountTitle.jsx";
import FilterButton from "./FilterButton.jsx";
import reportIcon from "./assets/report.svg";
import sendIcon from "./assets/send.svg";

export default function TotalIncome(){

    const totalData = useLoaderData();

    const currencyOption = (
        <select name="currency" className="select-dropdown">
          <option value="usd">USD</option>
          <option value="gbp">GBP</option>
          <option value="eur">EUR</option>
          <option value="ngn">NGN</option>
        </select>
    );
    
    return(
        <div>
            <div className="filter-and-amount-container">
                <div className="filter-button-container">
                    <FilterButton btnText={`Filter Applied:${3}`} />
                </div>

                <AmountTitle 
                componentTitle="Total Income" 
                amountOfMoney= {250320.55.toLocaleString()} 
                selectOptions={currencyOption}
                />
            </div>
            <div className="amount-list-and-report-container">
                <div className="amount-lists">
                    {totalData.map((totalData, index)=>(
                        <div key={index}>
                            <AmountList  
                            amount={totalData.totalFiat ? 
                                `$${Number(totalData.amount).toLocaleString()}`
                                : `${totalData.crypto} BTC`
                            }
                            date={totalData.date}/>
                
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

export const totalIncomeLoader = async ()=>{
    const response =await fetch("http://localhost:3000/income")
    return response.json()
}