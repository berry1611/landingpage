const ButtonNavbarOutlined = {
  borderRadius: 3,
  textTransform: 'capitalize',
};

const ButtonNavbarContained = {
  color: 'white',
  borderRadius: 3,
  textTransform: 'capitalize',
};

const NavbarItemLarge = {
  display: { xs: 'none', md: 'flex' },
  ml: 'auto',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const NavbarItemSmall = {
  display: { xs: 'flex', md: 'none' },
  justifyContent: 'flex-end',
  ml: 'auto',
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

const styles = { ButtonNavbarOutlined, ButtonNavbarContained, NavbarItemLarge, TypographyLink, NavbarItemSmall };

export default styles;
