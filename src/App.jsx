import React from 'react';
import { Link } from 'react-router-dom';
import AppContainer from "./components/common/AppContainer"

const App = () => {
    return (
        <AppContainer>
            <h1 className="text-white text-6xl mt-10">This is Landing Page</h1>
            <Link to="/login" className='text-white text-6xl mt-10 block text-center'>Login</Link>
        </AppContainer>
    );
}

export default App;