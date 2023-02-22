import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>My Home Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>Cart</Link>
            <Link to={'/event'}>Event</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
