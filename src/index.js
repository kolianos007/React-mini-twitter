import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';



// function WhoAmI({ name, surname, link }) {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="John" surname="Smith" link="facebook.com" />
//       <WhoAmI name="Iban" surname="Smith" link="vvk.com" />
//       <WhoAmI name="Johohohoo" surname="sdfdsf" link="add.com" />
//     </>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


