import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/src/hooks/useAuth';
import styles from './Login.module.css';

function LoginForm() {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
    const { user, login } = useAuth();

    useEffect(() => {
        if (Object.values(user).length) {
            router.push('/');
        } 
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users/login', {
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
            <div className={`${styles.form_signin} w-100 m-auto`}>
                <form noValidate>
                    <h1 className="h3 mb-3 fw-normal text-center">Hey, you can sign in here</h1>

                    <div className="form-floating">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com" 
                            value={userInfo.email}
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            value={userInfo.password}
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign in</button>
                    <p className='my-3 text-end'><Link href='/signup'>Don&apos;t have an account?</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;