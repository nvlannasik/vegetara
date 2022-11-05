const Styles = (theme) => ({
  cover: {
    height: "300px",
    backgroundColor: "#7DCE13",
    '@media (max-width: 1299px)': {
      height: "200px",
    },

  },
  container: {
    display: "flex",
    justifyContent: "flex-start",
    '@media (max-width: 767px)': {
      justifyContent: "center",
    },
    marginLeft:"30px",
    zIndex: "1",
    position: "relative",
    top:"-50px",
  },
  history: {
    marginBottom: 20,
    padding:'20px 20px'
  },
  avatar: {
    height: "130px",
    width: "130px",
    borderRadius: "50%",
    backgroundColor: "#7DCE13",
    color: "#FFFFFF",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "80px",
    border: "5px solid #FFFFFF",
  }
});

export default Styles;