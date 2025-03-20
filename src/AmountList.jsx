import PropTypes from "prop-types";

export default function AmountList({amount, date, containerBorderStyles}){

    const amountListContainerStyles = {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.8rem",
        backgroundColor: "#fdfdfd",
        borderLeft: "solid 2px #00b600",
    };
    const amountStyles = {
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.5rem",
        color: "#020202",
    };

    const dateStyles = {
        fontSize: "1rem",
        fontWeight: "300",
        lineHeight: "1.25rem",
        color: "#898989",
        cursor: "pointer",
      };
    

    return(
        <div style={{...amountListContainerStyles, ...containerBorderStyles}}className="amount-list-container">
            <div className="left-list-content">
                <div className="amount">
                    <h1 style={amountStyles}>{amount}</h1>
                </div>

                <div className="payment-date">
                    <p style={dateStyles}>{date}</p>
                </div>
            </div>

            <div className="right-list-content">
                <p style={dateStyles}>View details</p>
            </div>
        </div>
    )
}

AmountList.propTypes = {
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    containerBorderStyles : PropTypes.object,
};