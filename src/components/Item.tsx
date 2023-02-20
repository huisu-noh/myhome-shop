import { Col } from 'react-bootstrap';

function Item(props: any) {
  const { id, title, content } = props.shoes;

  return (
    <Col sm>
      <img
        className='img'
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        alt=''
      />
      <h4>{title}</h4>
      <p>{content}</p>
    </Col>
  );
}

export default Item;
