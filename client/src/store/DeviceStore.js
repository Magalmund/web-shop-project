import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id:1, name: 'Samsung'},
            {id:2, name: 'Apple'}
        ]
        this._devices = [
            {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-pro-max-pacific-blue.png?v=11`},
            {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-pro-max-pacific-blue.png?v=11`},
            {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-pro-max-pacific-blue.png?v=11`},
            {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-pro-max-pacific-blue.png?v=11`},
            {id:1, name: 'Iphone 12 Pro', price: 25000, rating: 5, img: `https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-12-pro-max-pacific-blue.png?v=11`},
        ]
        makeAutoObservable(this)
    }
    setTypes(types){
        this.isAuth = types
    }
    setBrands(brands) {
        this._user = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}