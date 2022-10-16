import { NoEncryption } from "@mui/icons-material";

const Style = () => ({

    h3Text: {
        fontSize: "16px",
    },
    
    detailCard: {
        marginTop: "5rem",
        padding: "0px 10px 200px 15px",
    },

    informationDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

    rowImage: {
        alignItems: 'right',
        justifyContent: 'right',
        padding: 10,
    },

    rowDesc: {
        padding: 10,
    },

    rowDetails: {
        padding: 10,
    },

    cardDetails: {
        border: "1px solid rgba(0, 0, 0, 0.2)",
        width : "240px",
        padding: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
    },

    counterText: {
        marginRight: 8,
        marginLeft: 8,
        fontSize: '16px'
    },
    
    plusMinusButton: {
        border: "none",
        background : "transparent",
        cursor: "pointer",
    },

    addToChart: {
        paddingBottom : 10,
        paddingLeft : 48,
        paddingRight : 48,
        marginTop: 30,
        borderRadius : 5,
        color : "white",
        paddingTop : 10,
        fontSize: "16px",
        backgroundColor : "#7DCE13",
    },

    checkout: {
        paddingBottom : 8,
        paddingLeft : 78,
        paddingRight : 78,
        marginTop: 8,
        borderRadius : 5,
        color : "#7DCE13",
        paddingTop : 10,
        fontSize: "16px",
        border: "1.5px solid #7DCE13",
        backgroundColor : "transparent",
    }
    
});

export default Style;
