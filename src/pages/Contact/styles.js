import { NoEncryption } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

const Style = () => ({

    contactSection: {
        marginTop: "100px",
        marginBottom: "50px"
    },

    contactCol: {
        padding: 20,
    },

    h2contact: {
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: "18px",
        fontWeight: "bold",
    },

    h3contact: {
        paddingTop: 15,
        paddingLeft: 15,
        fontSize: "14px",
        fontWeight: "bold",
    },

    contactPanel: {
        boxShadow: "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;",
        borderRadius: 10,
        padding : 25,
    },

    buttonPay: {
        width: "100px",
        padding: 10,
        color: "white",
        background : "#7DCE13",
        cursor: "pointer",
        border: "none",
        marginBottom: 15,
        borderRadius: 10,
    },

    textAreaInput:{
        width: "100%",
        border: '1px solid #9E9E9E',
        borderRadius: 10,
        marginBottom: 20,
        padding : 5,
    },

    labelArea: {
        color: '#757575',
        margin: 0,
        marginBottom: '10px',
    }
});

export default Style;
