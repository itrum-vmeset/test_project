import {AxiosResponse} from 'axios';
import { $host } from '../http';
import { AuthResponse } from '../models/AuthResponse';

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $host.post<AuthResponse>('/user/login', {username, password})
    }
}