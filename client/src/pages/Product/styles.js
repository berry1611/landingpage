const TypographyLink = {
  color: 'black',
  textDecoration: 'none',
  position: 'relative',
  '&:hover': {
    '&:after': {
      content: '""',
      display: 'inline-block',
      borderBottom: 3,
      width: '50%',
      margin: 'auto',
      position: 'absolute',
      left: '25%',
      bottom: '-6px',
    },
  },
};

const styles = { TypographyLink };

export default styles;
