const Styles = (theme) => ({

  modal: {
    backgroundColor: "#E5E5E5",
    height: "280px",
    width: "467px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    '& .avatar': {
      width: "50px",
      height: "50px",
      backgroundColor: "rgba(213, 17, 0, 0.1)",
      color: "#7DCE13",
    },
  },
  Typography: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#7DCE13",
    fontFamily: "Montserrat",
  },
 

});

export default Styles
