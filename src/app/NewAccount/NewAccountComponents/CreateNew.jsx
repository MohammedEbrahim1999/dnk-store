'use client'
import React from 'react';
import './CreateNew.css';
import Script from 'next/script';
const CreateNew = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <form class="my-form">
                        <div class="login-welcome-row">
                            <a href="#" title="Logo">
                                <img src="/imgs/storeify.png" alt="Logo" class="logo" />
                            </a>
                            <h1>Welcome Dear &#x1F44F;</h1>
                            <p>Please enter your details!</p>
                        </div>
                        <div class="input__wrapper">
                            <input type="email" id="email" name="email" class="input__field" placeholder="Your Email " required />
                            <label for="email" class="input__label">Email:</label>
                            <svg class="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                            </svg>
                        </div>
                        <div class="input__wrapper">
                            <input type="text" id="username" name="UserName" class="input__field" placeholder="UserName" required />
                            <label for="username" class="input__label">Username:</label>
                            <svg class="input__icon card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24"  stroke-width="2" stroke="currentColor" fill="" stroke-linecap="round" stroke-linejoin="round">
                            
                            <path d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/>
                            </svg>
                        </div>
                        <div class="input__wrapper">
                            <input id="password" type="password" class="input__field" placeholder="Your Password"
                                title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" required />
                            <label for="password" class="input__label">
                                Password
                            </label>
                            <svg class="input__icon " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                            </svg>
                        </div>
                        <div class="input__wrapper">
                            <input id="password" type="password" class="input__field" placeholder="Your Password"
                                title="Minimum 6 characters at least 1 Alphabet and 1 Number"
                                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" required />
                            <label for="password" class="input__label">
                                Confirm Password:
                            </label>
                            <svg class="input__icon " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                                <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
                                <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
                            </svg>
                        </div>
                        <button type="submit" class="my-form__button">
                            Create New Account
                        </button>
                        <div class="socials-row">
                            <a href="#" title="Use Google">
                                <img src="/imgs/google.png" alt="Google" />
                                Log in with Google
                            </a>
                        </div>
                        <div class="my-form__actions">
                            <div class="my-form__row">
                                <span>Back To Login?</span>
                                <a href="/Login" title="Create Account">
                                    Click Here
                                </a>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
            <Script src="./Script.js" strategy="afterInteractive" />

        </div>
    )
}

export default CreateNew
