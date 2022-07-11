import React, { useContext } from 'react';
import { Theme } from '../Theme'
import { AppContext } from '../../context/AppContext'

const Header = () => {
    const { userProcesses, products } = useContext(AppContext)

    return (
        <>Header 
        <Theme />
        <br/>
        userProcesses: { userProcesses }
        <br/>
        <br/>
        products: { products }
        </>
    );
}

export { Header }
