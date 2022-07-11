import React from 'react';
import { Header } from '../../components/Header'
import { useInitialState } from '../../hooks/useInitialState'
import { AppContext } from '../../context/AppContext';

const App = () => {
    const inicialState = useInitialState()

    return (
        <AppContext.Provider value={ inicialState }>
            <Header />
        </AppContext.Provider>
    );
}

export { App };
