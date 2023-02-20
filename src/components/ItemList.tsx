import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';

import data from '../data';
import Item from './Item';

export default function ItemList() {
  const [shoes] = useState(data);
  return (
    <Container>
      <Row>
        {shoes.map((shoes) => {
          return <Item shoes={shoes} key={shoes.id} />;
        })}
      </Row>
    </Container>
  );
}
