import { Container, Row } from 'react-bootstrap';
import { useState } from 'react';

import data from '../data';
import Item from './Item';
import axios from 'axios';

export default function ItemList() {
  const [shoes, setShoes] = useState(data);
  return (
    <>
      <Container>
        <Row>
          {shoes.map((shoes) => {
            return <Item shoes={shoes} key={shoes.id} />;
          })}
        </Row>
      </Container>
      <button
        onClick={async () => {
          const result = axios
            .get(`https://codingapple1.github.io/shop/data2.json`)
            .then((reponse) => reponse.data);
          console.log(result);
          let copy = [...shoes, ...(await result)];
          setShoes(copy);
        }}
      >
        버튼
      </button>
    </>
  );
}
