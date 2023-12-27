'use client'

import React from 'react';
import "./loginstyle.css"
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

function Layout({children}) {
const router = useRouter()
const path = usePathname()

const routerFunction = (name) => {
    router.push(name);
}
    return (
        <div>
            {
                path !== "/login/loginguard" ? <ul className='navbar-list'>
                <li onClick={()=>routerFunction("/login/loginstudent")}>Student</li>
                <li onClick={()=>routerFunction("/login/loginteacher")}>Teacher</li>
                <li onClick={()=>routerFunction("/login/loginwarden")}>Warden</li>
                <li onClick={()=>routerFunction("/login/loginguard")}>Guard</li>
            </ul> : null
            }
            {children}
        </div>
    );
}

export default Layout;