import {makeAutoObservable} from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import jwt_decode from 'jwt-decode'
import { $authHost } from "../http";

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(username: string, password: string) {
        try {
            const response = await AuthService.login(username, password)
            localStorage.setItem('token', response.data.token)
            const decoded = jwt_decode(response.data.token)
            this.setAuth(true)
            this.setUser(decoded as IUser)
        } catch (e) {
            console.log('login error from authStore')
        }
    }

    logout() {
        this.setAuth(false)
        this.setUser({} as IUser)
        localStorage.removeItem('token')
    }

    async checkAuth() {
        try {
            const {data} = await $authHost.get('user/check')
            return jwt_decode(data.token)

        } catch(e) {
            console.log('check auth error')
        }
    }
}
