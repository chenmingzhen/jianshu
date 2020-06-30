import React from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
      /*使用provider 该组件下的所有组件都可以使用store*/
      <Provider store={store}>
        <Header/>
      </Provider>
  );
}

export default App;
