import React from 'react';
import {Form} from "react-bootstrap";

const Login = ({email, setEmail, password, setPassword}) => {
    return (
        <div>
            <Form.Control
                className="mt-3"
                placeholder="Введите ваш email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
                className="mt-3"
                placeholder="Введите ваш пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
        </div>
    );
};

export default Login;