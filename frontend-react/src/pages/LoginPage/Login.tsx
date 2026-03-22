import React from 'react';
import './Login.css';

function Login() {
    return (
        <form action="/api/login" method="post">
            <h2>Вход</h2>
            
            <label htmlFor="username">Имя пользователя</label>
            <input 
                type="text" 
                id="username" 
                name="username" 
            />
            
            <label htmlFor="password">Пароль</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
            />
            
            <button type="submit">Войти</button>
            
            <p className="signup-link">
                Нету аккаунта? <a href="/reg">Регистрация</a>
            </p>
        </form>
    );
}

export default Login;