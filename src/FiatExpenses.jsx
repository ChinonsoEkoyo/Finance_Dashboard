import { useLoaderData } from "react-router-dom";
import AmountList from "./AmountList.jsx";
import AmountTitle from "./AmountTitle.jsx";
import FilterButton from "./FilterButton.jsx";
import reportIcon from "./assets/report.svg"
import sendIcon from "./assets/send.svg"
import { useEffect, useMemo, useState } from "react";

export default function FiatExpenses() {
    const expensesData = useLoaderData()
    const [currencyValue, setCurrencyValue] = useState("USD")
  
    const handleCurrencyChange = (event) => {
      const { value } = event.target
      setCurrencyValue(value)
    }
  
    const currencyOption = (
      <select name="currency" className="select-dropdown" value={currencyValue} onChange={handleCurrencyChange}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="NGN">NGN</option>
      </select>
    )
  
    const totalExpenses = useMemo(
      () => expensesData.reduce((sum, expense) => sum + Number(expense.amount), 0),
      [expensesData],
    )
  
    return (
      <div>
        <div className="filter-and-amount-container">
          <div className="filter-button-container">
            <FilterButton btnText={`Filter Applied:${3}`} />
          </div>
  
          <AmountTitle
            componentTitle="Total Fiat Expenses"
            amountOfMoney={totalExpenses.toLocaleString()}
            selectOptions={currencyOption}
            amountOfMoneyStyle={{ color: "#E13654" }}
            />
        </div>
        <div className="amount-list-and-report-container">
          <div className="amount-lists">
            {expensesData.map((expense, index) => (
              <div key={index}>
                <AmountList 
                amount={`$${expense.amount.toLocaleString()}`} 
                date={expense.date}
                containerBorderStyles={{ borderLeft: "2px solid #E13654" }} 
                />
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
  
  export const fiatExpensesLoader = async () => {
    const response = await fetch("http://localhost:3000/expenses")
    return response.json()
  }
  
  