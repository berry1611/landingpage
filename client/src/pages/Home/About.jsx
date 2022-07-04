import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import styles from './styles';

const About = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ ...styles.Container }}>
        <Typography variant="h3" align="center" sx={{ ...styles.Title }}>
          About
        </Typography>
        <Typography align="justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem exercitationem saepe veniam! Blanditiis maiores repellendus dolore tenetur accusamus harum ab eos nulla vero voluptas nihil est ipsa voluptates cumque ad asperiores,
          sit inventore. Quam, consequuntur debitis vero quibusdam possimus harum. Enim voluptates placeat quod minus labore natus recusandae voluptatum inventore nam distinctio odio quasi veniam vero exercitationem perspiciatis atque
          deleniti, at magnam temporibus, dolores earum quibusdam iure. Cumque numquam veritatis similique quasi, consequuntur a deleniti dicta excepturi ducimus voluptas ut nostrum doloribus ab pariatur placeat commodi sed cum illum error.
          Labore reprehenderit repudiandae architecto odit eum illum magnam explicabo voluptas.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
