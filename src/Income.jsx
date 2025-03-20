import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"


export default function Income(){
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("fiat");



    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        navigate(tabName);
      };

    return(
        <div className="button-container">
            <button  className={activeTab === "fiat" ? "active-button": ""} onClick={()=>handleTabClick("fiat")}>Fiat Income</button>
            <button  onClick={()=>handleTabClick("crypto")}>Crypto Income</button>
            <button  onClick={()=>handleTabClick("total")}>Total Income</button>
        </div>
    )
}