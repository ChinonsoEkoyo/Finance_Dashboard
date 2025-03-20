import filterIcon from "./assets/filterIcon.svg"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

export default function FilterButton({btnText,icon, alt}){

    const filterBtnStyles = {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        columnGap: "0.2rem",
        backgroundColor: "#f8f8f8",
        border: "0.5px solid #e3e3e3",
        borderRadius: "4px",
        padding: "0.3rem",
        fontSize: "small",
        color: "#9f9f9f",
        cursor:"pointer"
    };
    const iconStyles = {
        width: "16px",
        height: "16px",
        color:" #9f9f9f",
    }
    return(
        <div>
            <Link>
                <button style={filterBtnStyles}>
                {btnText} <img src={filterIcon} alt="filter" style={iconStyles} />
                </button>
            </Link>
        </div>
    )
}
FilterButton.propTypes = {
    btnText: PropTypes.any.isRequired,
    icon: PropTypes.any,
    alt: PropTypes.string,
  };
