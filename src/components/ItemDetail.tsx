import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AddItem } from '../store/CartSlice';

const Box = styled.div`
  width: 80%;
  height: 200px;
  padding: 20px;
`;

export default function ItemDetail() {
  const [tab, setTab] = useState(0);
  const paramsId = useParams();
  const index = Number(paramsId.id);
  const shoes = useSelector((state: any) => state.product);
  const { id, title, content, price } = shoes[index];
  const cart = { id, name: title, count: 0 };

  const dispatch = useDispatch();

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img
              src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
              width='100%'
              alt=''
            />
          </div>
          <div className='col-md-6'>
            <h4 className='pt-5'>{title}</h4>
            <p>{content}</p>
            <p>{price}</p>
            <button
              className='btn btn-danger'
              onClick={() => {
                dispatch(AddItem(cart));
              }}
            >
              주문하기
            </button>
          </div>
        </div>
        <Nav variant='tabs' defaultActiveKey='link0'>
          <Nav.Item>
            <Nav.Link
              eventKey='link0'
              onClick={() => {
                setTab(0);
              }}
            >
              상세 정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link1'
              onClick={() => {
                setTab(1);
              }}
            >
              상품 리뷰
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link2'
              onClick={() => {
                setTab(2);
              }}
            >
              배송 / 교환 / 반품
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {tab === 0 && <Box>내용0</Box>}
        {tab === 1 && <Box>내용1</Box>}
        {tab === 2 && <Box>내용2</Box>}
      </div>
    </>
  );
}
