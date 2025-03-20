import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./RootLayout.jsx"
import Investments from "./Investments.jsx"
import Settings from "./Settings.jsx"
// import Sms from "./sms.jsx"
import IncomeLayout from "./IncomeLayout.jsx"
import FiatIncome, { fiatIncomeLoader } from "./FiatIncome.jsx"
import CryptoIncome, { cryptoIncomeLoader } from "./CryptoIncome.jsx"
import TotalIncome, { totalIncomeLoader } from "./TotalIncome.jsx"
import ExpensesLayout from "./ExpensesLayout.jsx"
import InvestmentsLayout from "./InvestmentsLayout.jsx"
import FiatExpenses, { fiatExpensesLoader } from "./FiatExpenses.jsx"
import CryptoExpenses, { cryptoExpensesLoader } from "./CryptoExpenses.jsx"
import TotalExpenses, { totalExpensesLoader } from "./TotalExpenses.jsx"
import FiatInvestments, { fiatInvestmentLoader } from "./FiatInvestments.jsx"
import CryptoInvestments, { cryptoInvestmentLoader } from "./CryptoInvestments.jsx"
import TotalInvestments, {totalInvestmentLoader} from "./TotalInvestments.jsx"
import SmsAlerts, { smsAlertsLoader } from "./SmsAlerts.jsx"
import Integrations from "./Integrations.jsx"
import Notification from "./Notification.jsx"
import Preference from "./Preference.jsx"
import Profile from "./Profile.jsx"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<IncomeLayout />}>
            <Route index element={<FiatIncome />} loader={fiatIncomeLoader} />
            <Route path="fiat" element={<FiatIncome />} loader={fiatIncomeLoader} />
            <Route path="crypto" element={<CryptoIncome />} loader={cryptoIncomeLoader} />
            <Route path="total" element={<TotalIncome />} loader={totalIncomeLoader} />
          </Route>

          <Route path="expenses" element={<ExpensesLayout />}>
            <Route index element={<FiatExpenses />} loader={fiatExpensesLoader} />
            <Route path="fiat" element={<FiatExpenses />} loader={fiatExpensesLoader} />
            <Route path="crypto" element={<CryptoExpenses />} loader={cryptoExpensesLoader} />
            <Route path="total" element={<TotalExpenses />} loader={totalExpensesLoader} />
          </Route>

          <Route path="sms" element={<SmsAlerts />} loader={smsAlertsLoader} />


          <Route path="investments" element={<InvestmentsLayout />} >
            <Route index element={<FiatInvestments />} loader={fiatInvestmentLoader} />
            <Route path="fiat" element={<FiatInvestments />} loader={fiatInvestmentLoader} />
            <Route path="crypto" element={<CryptoInvestments />} loader={cryptoInvestmentLoader} />
            <Route path="total" element={<TotalInvestments />} loader={totalInvestmentLoader} />
          </Route>


          <Route path="settings" element={<Settings />} >
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notification />} />
            <Route path="preference" element={<Preference />} />
            <Route path="integration" element={<Integrations />} />
          </Route>
        </Route>
      </>
    )
  )

  
  return <RouterProvider router={router} />
}

export default App

