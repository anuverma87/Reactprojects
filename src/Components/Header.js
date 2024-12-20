import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Troffico</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                       <Link to={"/add"} >Add Product</Link>
                       <Link to={"/edit"}>Edit Product</Link>
                       <Link to={"/register"}>Register</Link>
                       <Link to={"/login"}>Login</Link>                       
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header