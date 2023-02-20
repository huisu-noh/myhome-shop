import { Navbar, Container, Nav, Row } from 'react-bootstrap';
import { useState } from 'react';

import './App.css';
import data from './data';
import Item from './components/Item';

function App() {
  const [shoes] = useState(data);
  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>My Home Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
            <Nav.Link href='#pricing'>My Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {shoes.map((shoes) => {
            console.log(shoes);
            return <Item shoes={shoes} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
