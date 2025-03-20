import { useNavigate } from "react-router-dom"
export default function Investments(){
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate("fiat")}>Fiat Investments</button>
            <button onClick={()=>navigate("crypto")}>Crypto Investments</button>
            <button onClick={()=>navigate("total")}>Total Investments</button>
        </div>
    )
}