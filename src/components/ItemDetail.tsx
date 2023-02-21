import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../data';

export default function ItemDetail() {
  const [shoes] = useState(data);
  const [tab, setTab] = useState(0);
  let paramsId = useParams();
  let index = Number(paramsId.id);
  const { id, title, content, price } = shoes[index];

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
            <button className='btn btn-danger'>주문하기</button>
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
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link1'
              onClick={() => {
                setTab(1);
              }}
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='link2'
              onClick={() => {
                setTab(2);
              }}
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {tab === 0 && <div>내용0</div>}
        {tab === 1 && <div>내용1</div>}
        {tab === 2 && <div>내용2</div>}
      </div>
    </>
  );
}
