import { useEffect, useState } from "react"

import { useUser } from "@/src/hooks/useUser";
import { useAuth } from "@/src/hooks/useAuth";
import productsDataEn from '../../../public/locales/en/common.json';
import productsDataAr from '../../../public/locales/ar/common.json';

function HomeComponent() {
    const [products, setProducts] = useState([]);
    const [lang, setLang] = useState('en');
    const { user } = useUser();
    const { logout } = useAuth();

    useEffect(() => {
        if (lang === 'en') {
            setProducts(productsDataEn.products);
        } else {
            setProducts(productsDataAr.products);
        }
    }, [lang]);

    useEffect(() => {
        document.querySelector("html").setAttribute("dir", lang === 'ar' ? 'rtl' : 'ltr');
        document.querySelector("html").setAttribute("lang", lang === 'ar' ? 'ar' : 'en-US');
    }, [lang]);

    return (
        <>
            <div className={lang === 'en' ? 'text-end' : 'text-start'}>
                <button className="btn btn-light mb-3" onClick={() => setLang(lang === 'en' ? 'ar': 'en')}>
                    {lang === 'en' ? 'عربى' : 'English'}
                </button>
            </div>
            <div className={`hero ${lang === 'en' ? 'text-end' : 'text-start'}`}>
                Name: {user.name} <br />
                Email: {user.email} <br />
                Created At: {user.createdAt} <br />
                <button className="btn btn-light my-3" onClick={() => logout()}>Log Out</button>
            </div>
            <div className="row my-4">
                {products.map((each, idx) => (
                    <div className="col-sm-12 col-md-6 my-2" key={idx}>
                        <div className="card" style={{ height: '15em'}}>
                            <div className="card-body">
                                <h5 className="card-title">{each.name} - ${each.price}</h5>
                                <p className="card-text text-sm">{each.description}</p>
                                <p className="card-text text-sm">
                                    Specs: ${each.specs} <br />
                                    Reviews: {each.reviews} {' '}
                                    Sold: ${each.sold} {' '}
                                    Left: ${each.left}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomeComponent;