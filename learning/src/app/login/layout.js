'use client'

import React from 'react';
import "./loginstyle.css"
import { useRouter } from 'next/navigation';

function Layout({children}) {
const router = useRouter()

const routerFunction = (name) => {
    router.push(name);
}
    return (
        <div>
            <ul className='navbar-list'>
                <li onClick={()=>routerFunction("/login/loginstudent")}>Student</li>
                <li onClick={()=>routerFunction("/login/loginteacher")}>Teacher</li>
                <li onClick={()=>routerFunction("/login/loginwarden")}>Warden</li>
                <li onClick={()=>routerFunction("/login/loginguard")}>Guard</li>
            </ul>
            {children}
        </div>
    );
}

export default Layout;