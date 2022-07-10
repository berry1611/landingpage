import jumbotronImg from '../../assets/images/jumbotron-img-4.jpg';

const Jumbotron = {
  display: 'flex',
  height: '100vh',
  backgroundImage: `url(${jumbotronImg})`,
  backgroundSize: 'cover',
};

const Container = {
  pt: 6,
  pb: 8,
};

const Title = {
  '&:after': {
    content: '""',
    display: 'block',
    borderBottom: 5,
    width: '100px',
    margin: 'auto',
    mb: 5,
    pb: 1,
  },
};

const styles = { Jumbotron, Container, Title };

export default styles;
