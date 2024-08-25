import axios from "axios";

class Api {

    private baseUrl: string;
    private headers: any;

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_API_URL
        this.headers = {
            'Authorization': '',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }

    async get(endpoint: string, params: any = {}) {
        const res = await axios.get(this.baseUrl + endpoint, {
            params: params,
            headers: this.headers
        });
        return await res.data;
    }

    async post(endpoint: string, data: any, params: any = {}) {
        const res = await axios.post(this.baseUrl + endpoint, data, {
            params: params,
            headers: this.headers
        });
        return await res.data;
    }

    async put(endpoint: string, data: any, params: any = {}) {
        const res = await axios.put(this.baseUrl + endpoint, data, {
            params: params,
            headers: this.headers
        });
        return await res.data;
    }

    async delete(endpoint: string, params: any = {}) {
        const res = await axios.delete(this.baseUrl + endpoint, {
            params: params,
            headers: this.headers
        });
        return await res.data;
    }

}

export default Api;