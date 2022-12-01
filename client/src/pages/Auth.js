import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import RegistrationPage from "./RegistrationPage";
import Login from "../components/Login/Login";
import Registration from "../components/Registration";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE



    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    {isLogin
                    ?
                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                        />
                        :
                        <div>Registration</div>
                    }
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                        {isLogin
                            ?
                            <div style={{width: "50%", padding: 0}}>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                            </div>
                            :
                            <div style={{width: "50%", padding: 0}}>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                            </div>
                        }

                        <Button
                            style={{width: "50%"}}
                            className="align-self-end"
                            variant="outline-success"
                            onClick={click}
                        >
                            {isLogin
                                ?
                                "Войти"
                                :
                                "Регистрация"
                            }
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;