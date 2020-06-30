import React from 'react';
import Header from './common/header/index';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import { renderRoutes } from 'react-router-config';
import routes from './router';
function App() {
    return (
        /*使用provider 该组件下的所有组件都可以使用store*/
        <Provider store={store}>
            <BrowserRouter>
                {/*<div>
                    <Header/>
                    <Route path={'/'} exact component={Home}/>
                    <Route path={'/Home'} exact component={Home}/>
                </div>*/}
                <Header/>
                {renderRoutes(routes)}
            </BrowserRouter>
        </Provider>
    );
}

export default App;
