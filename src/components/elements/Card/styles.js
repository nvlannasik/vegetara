
const Style = () => ({
  gridCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "1px solid rgba(0, 0, 0, 0.2)",
    marginBottom: "2rem",
    paddingTop: 15,
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    '@media (min-width: 768px) and (max-width:1299px)': {
      width: 180,
    },
    '@media (max-width: 767px)': {
      width: 150,
    },
    '& .cardImage': {
      '& img': {
        width: "100%",
        height: 180,
        '@media (min-width: 768px) and (max-width:1299px)': {
          height: 125,
        },
        '@media (max-width: 767px)': {
          height: 100,
        },
      },
    },
  },

  titleCard: {
    fontWeight: 500,
    fontSize: 16,
    '@media (min-width: 768px) and (max-width: 1299px)': {
      fontSize: 14,
    },
    '@media (max-width: 767px)': {
      fontSize: 10,
    },
  },

  nameOwner: {
    color: "rgba(0, 0, 0, 0.5)",
    marginTop: 15,
    '@media (min-width: 768px) and (max-width: 1299px)': {
      marginTop: 10,
    },
    '@media (max-width: 767px)': {
      marginTop: 8,
    },
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
    marginTop: 10,
    '@media (max-width: 768px)': {
      marginTop: 0,
    },
  },

  estimasi : {
    color : "rgba(0, 0, 0, 0.5)",
  },

  priceTag: {
    justifyContent : "center",
    marginTop: 20,
    '@media (min-width: 768px) and (max-width: 1299px)': {
      marginTop: 10,
    },
    '@media (max-width: 767px)': {
      marginTop: 5,
    },
  },

  priceText: {
    height : 25,
    paddingBottom : 15,
    paddingLeft : 75,
    paddingRight : 75,
    borderRadius : 10,
    color : "white",
    paddingTop : 15,
    backgroundColor: "#7DCE13",
    '@media (min-width: 768px) and (max-width: 1299px)': {
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 10,
      paddingBottom: 10,
    },
    '@media (max-width: 767px)': {
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 8,
      paddingBottom: 8,
    },
  },
  expired: {
    backgroundColor: "red",
  }
});

export default Style;
