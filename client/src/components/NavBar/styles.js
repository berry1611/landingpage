const ButtonNavbarOutlined = {
  borderRadius: 3,
  mr: 1,
  textTransform: 'capitalize',
};

const ButtonNavbarContained = {
  color: 'white',
  borderRadius: 3,
  textTransform: 'capitalize',
};

const NavbarItem = {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const TypographyLink = {
  color: 'primary.main',
  textDecoration: 'none',
  mr: 4,
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

const styles = { ButtonNavbarOutlined, ButtonNavbarContained, NavbarItem, TypographyLink };

export default styles;
