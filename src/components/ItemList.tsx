import { Col, Row } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 50px;
  display: grid;
  grid-gap: 15px;
  a {
    color: black;
    text-decoration: none;
  }
`;

export default function ItemList() {
  const shoes = useSelector((state: any) => state.product);

  const LookedItem = (id: any) => {
    const lacalArr = localStorage.getItem('watched');
    const newArr = JSON.parse(lacalArr!);
    newArr.unshift(id);
    const setArr = new Set(newArr);
    const finalArr = Array.from(setArr);
    localStorage.setItem('watched', JSON.stringify(finalArr));
  };

  return (
    <>
      <Container>
        <Row>
          {shoes.map((a: any, i: any) => {
            return (
              <Col sm key={i} onClick={() => LookedItem(shoes[i].id)}>
                <Link to={`/detail/${i}`}>
                  <img
                    className='img'
                    src={`https://codingapple1.github.io/shop/shoes${
                      i + 1
                    }.jpg`}
                    alt=''
                  />
                  <h4>{shoes[i].title}</h4>
                  <p>{shoes[i].price}</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
