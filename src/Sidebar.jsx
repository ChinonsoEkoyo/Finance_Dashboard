import {NavLink} from "react-router-dom"
import incomeIcon from "./assets/income.svg"
import expensesIcon from "./assets/expenses.svg"
import investmentIcon from "./assets/investment.svg"
import settingsIcon from "./assets/settings.svg"
import smsIcon from "./assets/smsalert.svg"
import logoIcon from "./assets/zikopay.svg"
// import sidebarIcon from "./assets/sidebarcollapse.svg"

export default function Sidebar(){
    

    return(
        <div className="sidebar-container">
            <div className="logo-sidebaricon-container">
                <div className="logo-container">
                    <img src={logoIcon} alt="logo" />
                </div>
                <div className="sidebaricon-container">
                    {/* <img src={sidebarIcon} alt="sidebar" /> */}
                </div>
            </div>
            
            <div className="menu-items-container">
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "active-nav-link" : "")}>
                    <div className="menu-items" tabIndex={"-1"}>
                        <div className="icon-container">
                            <img src={incomeIcon} alt="income" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Income</h1>
                            <p>Click to see how much income you've made</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={"expenses"} className={({ isActive }) => (isActive ? "active-nav-link" : "")}>
                    <div className="menu-items" tabIndex={"-1"}>
                        <div className="icon-container">
                            <img src={expensesIcon} alt="expenses" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Expenses</h1>
                            <p>Click to see how much income you've spent</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={"sms"} className={({ isActive }) => (isActive ? "active-nav-link" : "")}>
                    <div className="menu-items" tabIndex={"-1"}>
                        <div className="icon-container">
                            <img src={smsIcon} alt="sms" />
                        </div>
                        <div className="menu-text-container">
                            <h1>SMS alerts</h1>
                            <p>Click to see your financial SMS notifications</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={"investments"} className={({ isActive }) => (isActive ? "active-nav-link" : "")}>
                    <div className="menu-items" tabIndex={"-1"}>
                        <div className="icon-container">
                            <img src={investmentIcon} alt="investment" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Investments</h1>
                            <p>Click to see how much you've invested</p>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={"settings"} className={({ isActive }) => (isActive ? "active-nav-link" : "")}>
                    <div className="menu-items" tabIndex={"-1"}>
                        <div className="icon-container">
                            <img src={settingsIcon} alt="settings" />
                        </div>
                        <div className="menu-text-container">
                            <h1>Settings</h1>
                            <p>Click to change your settings</p>
                        </div>
                    </div>
                    
                    
                </NavLink>

                

            </div>
        </div>
    )
}