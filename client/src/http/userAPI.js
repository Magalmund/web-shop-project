import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (name, lastName, email, address, phone, password) => {
    const {data} = await $host.post('api/user/registration', {name, lastName, email, address, phone, password, role:'ADMIN'})
    localStorage.setItem('token', data.token )
    console.log(data)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token )
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth',)
    localStorage.setItem('token', data.token )
    return jwt_decode(data.token)
}