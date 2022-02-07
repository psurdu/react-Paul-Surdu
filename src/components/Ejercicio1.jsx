import React from 'react';
import { Navbar } from 'react-bootstrap';

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      /*
      <div id="ej1">
        <h2>Ejercicio 1</h2>
        <ul>
          <li>
            Modifica los componentes Navbar y App para que se pueda navegar a
            través de los ejercicios del examen de forma que se cumpla lo
            siguiente:
            <ul>
              <li>
                La barra de navegación implementa el componente de
                React-Bootstrap{' '}
                <a href="https://react-bootstrap.github.io/components/navbar/#offcanvas">
                  Offcanvas
                </a>{' '}
                <b> - 1,5 puntos</b>
              </li>
              <li>
                Bajo el título del examen solamente se deberá mostrar el
                ejercicio seleccionado en el menú, y no será necesario recargar
                la página para navegar por los distintos ejercicios{' '}
                <b> - 1 punto</b>
              </li>
              <li>
                Las opciones del menú se generarán de manera dinámica a partir
                de un objeto Javascript almacenado en un fichero con nombre{' '}
                <i>MenuElements.js</i>
                <b> - 0,5 puntos</b>
              </li>
            </ul>
            Añade al proyecto las dependencias que consideres necesarias.
          </li>
        </ul>
      </div>*/
    );
  }
}

export default Ejercicio1;
