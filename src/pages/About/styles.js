import { Margin, NoEncryption } from "@mui/icons-material";

const Style = () => ({

    aboutUsSection: {
        marginTop: "100px",
        marginBottom: "50px"
    },

    aboutCard: {
        borderRadius: 10,
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px;",
        border: "none",
        '& img': {
            width: "100%",
        },
        '& h2': {
            fontSize: "24px",
            fontWeight: "bold",
            fontFamily: "Inter, sans-serif",
            color: "#757575",
            '@media (max-width: 767px)': {
                fontSize: "16px",
            },
        },
    },

    headerAboutUs:{ 
        fontSize : "36px",
        fontWeight: "bold",
    }
    
});

export default Style;
