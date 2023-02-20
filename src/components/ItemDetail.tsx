import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';

export default function ItemDetail() {
  const [shoes] = useState(data);
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
      </div>
    </>
  );
}
