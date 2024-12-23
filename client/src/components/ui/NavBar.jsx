import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import style from './NavBar.module.css'
// className="bg-body-tertiary"
function BasicExample({ user, logoutHandler }) {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg"  className={style.container}>
      <Container  className={style.container}>
        <Navbar.Brand as={RouterLink} to="/">ХОЧУ В ОТПУСК</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> */}
            {/* <Nav.Link as={RouterLink} to="/products">Направления</Nav.Link> */}
            {/* <Nav.Link as={RouterLink} to="/basket">Избранное ♡</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             {user ? (
              <>{user?.role === 'ADMIN' ? (
                <>
                <Nav.Link as={RouterLink} to="/basket">Избранное ♡</Nav.Link>
                <Nav.Link as={RouterLink} to="/products">Панель админа</Nav.Link> 
                </>
              ) : (
                <>
                <Nav.Link as={RouterLink} to="/basket">Избранное ♡</Nav.Link>
                <Nav.Link as={RouterLink} to="/productsUser">Направления</Nav.Link>
                </>
              )}</>
             ) : (
              <> </>
             )}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse id="basic-navbar-nav" className={style.end}>
          <Nav >
              {user ? (
              <>
              <Nav.Link as={RouterLink} to="/">Привет, {user.name}</Nav.Link>
               <Nav.Link as={RouterLink} to="logout" onClick={() => logoutHandler().then(() => navigate('/login'))}>Выйти</Nav.Link>
              </>
            ) : (
              <>
              <Nav.Link as={RouterLink} to="/login">Войти</Nav.Link>
              <Nav.Link as={RouterLink} to="/signup" >Зарегистрироваться</Nav.Link>
              </>
            )} 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;