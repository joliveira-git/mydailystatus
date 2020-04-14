import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className='p-2 hover:underline hover:text-red-800'>{children}</a>
        </Link>
    )
}

const NavBar = () => {
    return (
        <div className='bg-gray-800 py-4 bg-gray-400 text-white'>
            <NavLink href='/sobre'>Sobre</NavLink>
            <NavLink href='/cadastro'>Cadastro</NavLink>
            <NavLink href='/entrar'>Entrar</NavLink>
        </div>
    )
}
export default NavBar