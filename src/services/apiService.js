import axios from 'axios'

const BASE_URL =  'https://intense-cliffs-51301.herokuapp.com/' // process.env.REACT_APP_HEROKU_URL  //|| `http://localhost:8001/` 
const JWT_TOKEN = localStorage.getItem('token')

console.log("GOT HERE")
// console.log(BASE_URL)

//        'Access-Control-Allow-Origin': BASE_URL

export const apiCall = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${JWT_TOKEN}`
    }
})

export const login = async (data) => {
    try {
        console.log(data)
        const response = await apiCall.post('/auth/login', data)
        const { data: { token, user } } = response
        localStorage.setItem('token', token)
        localStorage.setItem('userId', user.id)
        return user
    }
    catch (error) {
        throw error
    }
}

export const signUp = async (data) => {
    console.log(data)
    try {
        await apiCall.post('/auth/signup', data)
    }
    catch (error) {
        throw error
    }
}

export const getProfile = async () => {
    try {
        const response = await apiCall.get('/app/profile')
        const { data: { user } } = response
        return user
    }
    catch (error) {
        throw error
    }
}
