import { NoEncryption } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

const Style = () => ({

    checkoutSection: {
        marginTop: "100px",
        marginBottom: "50px"
    },

    checkoutCol: {
        padding: 20,
    },

    h2checkout: {
        paddingTop: 10,
        fontSize: "18px",
        fontWeight: "bold",
    },

    h2checkout2: {
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: "18px",
        fontWeight: "bold",
    },

    h3checkout: {
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: "14px",
        fontWeight: "bold",
    },

    checkoutPanel: {
        boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
        borderRadius: 10,
    },
    
    priceDetails: {
        color : "rgba(0,0,0,.54)",
        paddingTop: 5,
        padding: 15,
    },

    totalPrice: {
        paddingTop: 5,
        padding: 15,
        fontWeight: "bold",
    },

    wrapperButton: {
        paddingLeft: 15,
        paddingRight: 15,
    },

    buttonPay: {
        width: "100%",
        padding: 10,
        color: "white",
        background : "#7DCE13",
        cursor: "pointer",
        border: "none",
        marginBottom: 15,
        borderRadius: 10,
    },

    descItems: {
        paddingLeft: 10,
        paddingRight: 10,
    },

    titleItems: {
        fontWeight : "bold",
        fontSize: "16px",
        color : "black",
        marginBottom: "5px",
    },

    hargaItems: {
        fontWeight : "bold",
        marginTop: "0px",
    },

    Address: {
        marginLeft: 15, 
        marginRight: 15,
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        padding : 15,
        borderRadius: 10,
    },

    AddressTitle: {
        background: "#6e7683",
        color : "white",
        fontSize: "14px",
        padding: "3px",
        borderRadius: "5px",
        marginRight: "5px",
    },

    pengiriman: {
        marginLeft: 15, 
        marginRight: 15,
        padding: 15,
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        borderRadius: 10,
    },

    plusMinusButton: {
        border: "none",
        background : "transparent",
        cursor: "pointer",
    },

    counterText: {
        marginRight: 8,
        marginLeft: 8,
        fontSize: '16px'
    },

    costumizeItems: {
        display: "flex",
        justifyContent : "space-between",
    },

    deleteButton: {
        cursor: "pointer",
        background: "transparent",
        border : "none",
    }, 

    headerTitle: {
        paddingTop: 15,
        paddingLeft: 15,
        display: "flex",
        justifyContent : "space-between",
    },

    selectAll: {
        paddingTop: 10,
        paddingBottom: 30,
        color : "#7DCE13",
        fontWeight :"bold",
    }
});

export default Style;
