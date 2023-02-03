import React from 'react';

const AppContainer = ({ children }) => {
    return (
        <div className="App">
            <div className="container mx-auto bg-[212735] max-h-[100vh] h-[100vh] relative overflow-y-auto">
                {children}
            </div>
        </div>
    );
}

export default AppContainer;