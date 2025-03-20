import PropTypes from "prop-types";
  
export default function AmountTitle({componentTitle, amountOfMoney, selectOptions, amountOfMoneyStyle}){
    const amountTitleContainer = {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "start",
        padding: "1rem",
        backgroundColor: "#fafafa",
        border: "0.5px solid #e3e3e3",
        borderRadius: "4px",
    };

    const titleStyle = {
        fontWeight: "400",
        fontSize: "1.7rem",
        color: "#565656",
    };

    const amountOfMoneyContainer = {
        width: "fit-content",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        columnGap: "0.35rem",
    };

    const defaultMoneyStyle ={
        fontWeight: "400",
        fontSize: "1.6rem",
        color: "#00b600",
    };

    
    
    return(
        <div style={amountTitleContainer} className="amount-title-container">
            <div className="left-content">
                <h1 style={titleStyle}>{componentTitle}</h1>
            </div>
            <div style={amountOfMoneyContainer}className="right-content">
                <h1 style={{...defaultMoneyStyle, ...amountOfMoneyStyle}}>{amountOfMoney}</h1>
                {selectOptions}
            </div>

        </div>
    )
}

AmountTitle.propTypes = {
    componentTitle: PropTypes.string.isRequired,
    amountOfMoney: PropTypes.any.isRequired,
    selectOptions: PropTypes.element.isRequired,
    amountOfMoneyStyle: PropTypes.object,

}