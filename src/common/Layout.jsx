import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function Layout({ children }) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-inverse">
                <div className="container">
                    <a className="navbar-brand" href="#">Ecommerce.co</a>
                </div>
            </nav>
            <main className={inter.className}>
                <div className='container'>
                    {children}
                </div>
            </main>
            <footer className='py-3 text-center'>
                Developed by: Usman Ali
            </footer>
        </>
    )
}

export default Layout;