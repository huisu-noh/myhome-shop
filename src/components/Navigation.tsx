import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>My Home Shop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='#features'>Cart</Nav.Link>
            <Nav.Link href='event'>Event</Nav.Link>
            <Nav.Link href='#pricing'>My Page</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
