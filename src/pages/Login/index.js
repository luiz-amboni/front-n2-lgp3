import React, { useState } from 'react'
import './login.css'
import './login.js'
import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import fazerLogin from './login.js'

function Login() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   const handleEntrar = () => {
      fazerLogin(email, password)
         .then(function(response) {
            alert(response.data.autenticacao);
         })
         .catch(function(err) {
            alert('Usuario ou senha invalido');
         });
   }

   return (
      <div className="login">
         <div className="login-logo">
            <img
               src="https://anzuns.org/wp-content/uploads/2018/02/admin_login.png"
               alt="MdLockLogin App"
            />
         </div>

         <div className="login-right">
            <h1>Acessar App</h1>

            <div className="login-loginInputEmail">
               <MdEmail />
               <input
                  type="text"
                  placeholder="Digite um email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>

            <div className="login-loginInputPassword">
               <MdLock />
               <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="login-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <button type="submit" onClick={handleEntrar}>
               Entrar
            </button>

            <h4>N??o tenho conta!</h4>

            <button type="submit">
               Cadastrar
            </button>
         </div>
      </div>
   )
}

export default Login

