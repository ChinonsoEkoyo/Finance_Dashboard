import { useNavigate } from "react-router-dom"

export default function Expenses(){
    const navigate = useNavigate()
    return(
        <div className="button-container">
            <button onClick={()=>navigate("fiat")}>Fiat Expenses</button>
            <button onClick={()=>navigate("crypto")}>Crypto Expenses</button>
            <button onClick={()=>navigate("total")}>Total Expenses</button>
        </div>
    )
}