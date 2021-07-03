import axios from 'axios';


function fazerLogin(login, senha) {
    const instance = axios.create({
        baseURL: process.env.URL_API || 'http://localhost:3001',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    });
    console.log('teste');

    return instance.post('/auth/authenticate', 
        {
            "login": login,
            "senha": senha
        }
    );
}



export default fazerLogin;