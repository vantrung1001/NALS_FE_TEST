import {  DOMAIN, JWT } from "../utils/constant"
import api from '../utils/api'

export class BaseService {
    get = (url) => {
        return api({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(JWT)
            }
        })
    }

    post = (url, model) => {
        return api({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(JWT)
            }
        })
    }

    put = (url, model) => {
        return api({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(JWT)
            }
        })
    }

    delete = (url) => {
        return api({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(JWT)
            }
        })
    }
}