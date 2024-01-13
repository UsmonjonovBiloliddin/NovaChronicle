import axios from "axios"

const BASE_URL = "http://localhost:3000/api"

const AuthService = {
    userRegister: async(user) => {
        const response = await axios.post(`${BASE_URL}/users` , { user })
        return response.data
    },
    userLogin: async(user) => {
        const {data} = await axios.post(`${BASE_URL}/users/login` , { user })
        return data
    }
}

export default AuthService