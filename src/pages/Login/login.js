import axios from 'axios';

function fazerLogin(login, senha) {
    const instance = axios.create({
        baseURL: 'https://api-n3.herokuapp.com',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    });

    return instance.post('/auth/authenticate', 
        {
            "login": login,
            "senha": senha
        }
    );
}



export default fazerLogin;