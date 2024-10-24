import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function BasicExample({ user, logoutHandler }) {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Главная страница</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/bot">Бот</Nav.Link>
            <Nav.Link href="/products">Товары</Nav.Link>
            <Nav.Link href="/basket">Корзина</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              {user ? (
              <>
              <Nav.Link href="/">Привет, {user.name}</Nav.Link>
               <Nav.Link href="/logout" onClick={() => logoutHandler().then(() => navigate('/login'))}>Выйти</Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link href="/login">Войти</Nav.Link>
              <Nav.Link href="/signup" >Зарегистрироваться</Nav.Link>
              </>
            )} 
            {/* <Nav.Link href="/login">Войти</Nav.Link>
            <Nav.Link href="/signup">Зарегистрироваться</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;