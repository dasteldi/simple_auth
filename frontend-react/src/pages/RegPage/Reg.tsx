import React from 'react';
import './Reg.css';

function Reg() {
    return (
        <div className="container">
            <h1>Регистрация</h1>
            <form action="http://localhost:3000/api/reg" method="post">
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                    />
                </div>
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                    />
                </div>
                
                <button type="submit">Зарегистрироваться</button>
                <p className="login-link">Есть аккаунт? <a href="/login">Войти</a></p>
            </form>
            <div id="message"></div>
        </div>
    );
};

export default Reg;