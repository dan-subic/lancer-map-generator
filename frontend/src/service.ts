import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Accept': '*/*',
        // 'Access-Control-Allow-Origin' : 'http://localhost:3000' 
    }
})

export const getTiles = async () => {
    /*const response = await fetch('http://localhost:3000/', {
        method: 'GET',
    })
    return response*/
    const response = await instance.get('tiles')
    return await response
}