import { NoEncryption } from "@mui/icons-material";

const Style = () => ({
  gridCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: 260,
    height: 320,
    backgroundColor: "#fff",
    borderRadius: 10,
    // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    marginBottom: "2rem",
    paddingTop : 15,
    flexDirection: "column",
    justifyContent: "center",
    cursor : "pointer"
  },

  titleCard: {
    fontWeight: 500,
  },

  nameOwner: {
    color : "rgba(0, 0, 0, 0.5)",
  },

  headerCard: {
    display : "flex",
    paddingLeft : 20,
    paddingRight : 20,
    paddingBottom : 12,
    justifyContent : "space-between",
  },

  buttonCard: {
    borderWidth: 0,
    backgroundColor: "#FAFAFA",
  },

  cardContent: {
    marginTop : 10,
  },

  estimasi : {
    color : "rgba(0, 0, 0, 0.5)",
  },

  priceTag: {
    justifyContent : "center",
    marginTop : 20,
  },

  priceText: {
    height : 25,
    paddingBottom : 15,
    paddingLeft : 75,
    paddingRight : 75,
    borderRadius : 10,
    color : "white",
    paddingTop : 15,
    backgroundColor : "#7DCE13",
  }
});

export default Style;
