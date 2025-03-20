// import FilterBtn from "../FilterBtn";
import SMSItem from "./SMSItem";
import trendUpIcon from "./assets/trend-up.svg";
import trendDownIcon from "./assets/trend-down.svg";
import investIcon from "./assets/investmenticon.svg";
import { useLoaderData } from "react-router-dom";
import FilterButton from "./FilterButton";

export default function SmsAlert() {
  const SMSNotifications = useLoaderData();

  const dropdownOption = (
    <select name="currency" className="select-dropdown">
      <option value="all">All</option>
      <option value="income">Income</option>
      <option value="expenses">Expenses</option>
      <option value="investments">Investments</option>
    </select>
  );

  // Dynamic Property Access for SMSItem component
  const categoryIcons = {
    income: {
      icon: <img src={trendUpIcon} alt="income" />,
      color: "iconContainerIsIncome",
    },
    expenses: {
      icon: <img src={trendDownIcon} alt="expenses" />,
      color: "iconContainerIsExpenses",
    },
    investment: {
      icon: <img src={investIcon} alt="investment" />,
      color: "iconContainerIsInvestments",
    },
    default: {
        icon: <div className="default-icon"></div>,
        color: "iconContainerDefault",
      },
  };

  

  return (
    <div className="sms-alert-content">
      <h1>SMS Notifications</h1>

      <div className="filter-sms-item-container">
        <FilterButton btnText={`Filter Applied:${5}`} />
        <div className="sms-item-container">
          {SMSNotifications.map((SMSNotification, index) => {
            const categoryData = categoryIcons[SMSNotification.category] || categoryIcons.default
            return(
            <SMSItem
              key={index}
              smsTitle={SMSNotification.title}
              smsDescription={SMSNotification.message}
              smsTimeStamp={SMSNotification.timestamp}
              alt={SMSNotification.category}
              icon={categoryData.icon}
              iconContainerStyle={categoryData.color}
            />
            )
            })}
        </div>
      </div>
    </div>
  );
}
export const smsAlertsLoader = async ()=>{
    const response =await fetch("http://localhost:3000/SMSNotification")
    return response.json()
}