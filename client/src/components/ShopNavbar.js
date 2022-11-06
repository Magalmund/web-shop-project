import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const ShopNavbar = observer ( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Купи девайс</NavLink>
                {/*<Navbar.Brand href="#home">Navbar</Navbar.Brand>*/}
                {user.isAuth
                    ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'} className="ms-2">Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default ShopNavbar;