import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item(props: any) {
  const { id, title, price } = props.shoes;

  return (
    <Col sm>
      <Link to={`/detail/${id}`}>
        <img
          className='img'
          src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
          alt=''
        />
        <h4>{title}</h4>
        <p>{price}</p>
      </Link>
    </Col>
  );
}

export default Item;
