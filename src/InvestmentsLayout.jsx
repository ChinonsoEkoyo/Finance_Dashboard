import { Outlet } from "react-router-dom";
import Investments from "./Investments";

export default function InvestmentsLayout(){
    return(
        <>
            <Investments />
            <Outlet />
        </>
    )
}