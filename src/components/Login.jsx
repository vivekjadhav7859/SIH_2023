// LoginForm.js
import React, { useState, useContext } from 'react';
import wave from '../assets/wave.svg'
import loginImg from '../assets/login.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext.jsx';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigateTo = useNavigate();
    const { loginUser } = useAuth();
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            console.log('handleLogin function called');
            const response = await demoAuth(username, password);
            const userData = response.data;
            loginUser(userData);
            navigateTo('/chatbot');

        } catch (error) {
            console.error('Authentication failed:', error.message);
        }
    };
    const demoAuth = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === 'test' && password === 'test123') {
                    resolve({ data: { username: 'demo', role: 'user' } });
                } else {
                    reject(new Error('Invalid username or password'));
                }
            }, 1000);
        });
    };

    return (
        <>
            <div className="bg-black h-screen mt-[-100px] ">

                <div className="flex flex-col-reverse lg:flex-row  bg-black lg:gap-36">
                    <div className="flex items-center justify-center lg:h-screen h-[50%] lg:max-w-[50%] max-w-[100%] max-h-[50%] lg:ml-48 lg:mt-0 mt-[-100px]">
                        <div className="lg:w-[28rem] w-[100%] p-8 bg-black text-white shadow-md rounded-md">
                            <h2 className="text-2xl font-semibold mb-4">Login With Your Account</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        placeholder='username'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full mt-5 p-2 border rounded-md bg-black"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        placeholder='password'
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full mt-5 p-2 border rounded-md text-white bg-black"
                                        autoComplete="off"
                                    />
                                </div>
                                <button type='submit' className='w-full mt-5 bg-purple-600 text-white p-2 rounded-2xl hover:bg-purple-900  cursor-pointer text-xl'>Login</button>
                            </form>
                        </div>

                    </div>
                    <div className="flex flex-col  items-center justify-center">
                        <div className="text-[#D7A1F9] text-4xl lg:mt-0 mt-40">AlgoAlliance</div>
                        <div className=''>
                            <img src={loginImg} alt="logo" className='w-[450px] lg:h-[250px] h-[550px] lg:mt-0 mt-[-100px]' />
                        </div>
                    </div>

                </div>
                <div className="lg:mt-[-11rem] bg-black">
                    <img src={wave} alt="wave" className='' />
                </div>

            </div >

        </>
    );
};

export default Login;
