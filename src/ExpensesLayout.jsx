import { Outlet } from "react-router-dom";
import Expenses from "./Expenses.jsx";

export default function ExpensesLayout(){

    return(
        <>
            <Expenses />
            <Outlet />
        </>
    )
}