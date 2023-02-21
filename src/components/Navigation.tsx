import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>My Home Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='cart'>Cart</Nav.Link>
            <Nav.Link href='event'>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
