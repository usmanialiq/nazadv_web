import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/src/hooks/useAuth';
import styles from './SignUp.module.css';

function SignUpForm() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });
            if (response.ok) {
                const data = await response.clone().json();
                login(data);
            }
        } catch(error) {
            console.log(error);
        }
    }
    return (
        <div className='d-flex align-items-center py-4'>
            <div className={`${styles.form_signup} w-100 m-auto`}>
                <form noValidate>
                    <h1 className="h3 mb-3 fw-normal text-center">Hey, you can sign up here</h1>

                    <div className="form-floating">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="floatingName" 
                            placeholder="Usman Ali" 
                            value={userInfo.name}
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                            required
                        />
                        <label htmlFor="floatingName">Name *</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingEmail" 
                            placeholder="name@example.com" 
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        />
                        <label htmlFor="floatingEmail">Email address *</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            value={userInfo.password}
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                            required
                        />
                        <label htmlFor="floatingPassword">Password *</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control pass1" 
                            id="floatingPassword1" 
                            placeholder="Password" 
                            value={userInfo.confirmPassword}
                            onChange={(e) => setUserInfo({ ...userInfo, confirmPassword: e.target.value })}
                            required
                        />
                        <label htmlFor="floatingPassword1">Confirm Password *</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign in</button>
                    <p className='my-3 text-end'><Link href='/'>Already have an account?</Link></p>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm;