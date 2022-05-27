import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import './index.css';
import App from './App';
import Clock from './components/features/Clock/Clock';
import { Friend } from './components/Friend/Friend';
import Profile from './components/Profile/Profile';
import  {Effect} from "./components/features/Effect/Effect";
import { PickSearch } from './components/features/PickSearch/PickSearch';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        </Route>
        <Route path="/clock" element={<Clock />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/increment" element={<Effect />} />
        <Route path="/picksearch" element={<PickSearch />} />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
