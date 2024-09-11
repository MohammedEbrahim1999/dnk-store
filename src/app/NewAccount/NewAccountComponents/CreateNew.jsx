// 'use client';
// import React from 'react';
// import './LoginForm.css';
// import Script from 'next/script';
// const Loginform = () => {
//     return (
//         <div className="login">
//             <div className="container">
//                 <div className="row">
//                     <form class="my-form">
//                         <div class="login-welcome-row">
//                             <a href="#" title="Logo">
//                                 <img src="/imgs/storeify.png" alt="Logo" class="logo" />
//                             </a>
//                             <h1>Welcome Dear &#x1F44F;</h1>
//                             <p>Please enter your details!</p>
//                         </div>
//                         <div class="input__wrapper">
//                             <input type="email" id="email" name="email" class="input__field" placeholder="Your Email" required />
//                             <label for="email" class="input__label">Email:</label>
//                             <svg class="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                                 <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
//                                 <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
//                             </svg>
//                         </div>
//                         <div class="input__wrapper">
//                             <input id="password" type="password" class="input__field" placeholder="Your Password"
//                                 title="Minimum 6 characters at least 1 Alphabet and 1 Number"
//                                 pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" required />
//                             <label for="password" class="input__label">
//                                 Password
//                             </label>
//                             <svg class="input__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                 stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                                 <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
//                                 <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
//                                 <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
//                                 <path d="M8 11v-4a4 4 0 1 1 8 0v4"></path>
//                             </svg>
//                         </div>
//                         <button type="submit" class="my-form__button">
//                             Login
//                         </button>
//                         <div class="socials-row">
//                             <a href="#" title="Use Google">
//                                 <img src="/imgs/google.png" alt="Google" />
//                                 Log in with Google
//                             </a>
//                         </div>
//                         <div class="my-form__actions">
//                             <div class="my-form__row">
//                                 <span>Forget Your Password?</span>
//                                 <a href="/Lost" title="Create Account">
//                                     Click Here
//                                 </a>
//                             </div>
//                         </div>
//                         <div class="my-form__actions">
//                             <div class="my-form__row">
//                                 <span>Don't have an account?</span>
//                                 <a href="/NewAccount" title="Create Account">
//                                     Sign Up
//                                 </a>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <Script src="./Script.js" strategy="afterInteractive" />

//         </div>

//     )
// }

// export default Loginform
'use client'
import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function LoginForm() {
    return (
        <MDBContainer fluid className="p-3 my-5">

            <MDBRow>

                <MDBCol col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                </MDBCol>

                <MDBCol col='4' md='6'>


                    <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Confirm Email address' id='formControlLg' type='email' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
                    <MDBInput wrapperClass='mb-4' label='Confirm Password' id='formControlLg' type='password' size="lg" />


                    <div className="d-flex justify-content-between mx-4 mb-4">
                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                        <a href="/Login" className='text-primary'>Sign In?</a>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg">Sign Up</MDBBtn>

                    <div className="divider d-flex justify-content-center align-items-center my-4">
                        <div>--------------------------</div>
                        <p className="text-center fw-bold mx-3 mb-0">OR</p>
                        <div>--------------------------</div>
                    </div>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                        Continue with facebook
                    </MDBBtn>

                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
                        <MDBIcon fab icon="twitter" className="mx-2" />
                        Continue with twitter
                    </MDBBtn>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default LoginForm;