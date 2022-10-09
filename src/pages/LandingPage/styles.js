const styles = () => ({
  landingPage: {
    width: '100%',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex:-1,
    },
    '& .landingPageContent': {
      position: 'absolute',
      top: 200,
      right: 500,
    }
  },
})

export default styles;