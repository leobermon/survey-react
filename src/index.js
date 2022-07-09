import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Body/App';
import Header from './Body/Header';
import reportWebVitals from './reportWebVitals';
import SuggestedQuestions from './Components/SuggestedQuestions';
import Carrousel from './Components/Carrousel';
import MsnTopHeader from './Components/MsnTopHeader';
import Information from './Components/Information';
import Footer from './Body/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsnTopHeader/>
    <Header/>
    <App />
    <Carrousel/>
    <Information/>
    <SuggestedQuestions/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
