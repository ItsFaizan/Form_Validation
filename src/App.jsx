import React from 'react';
import './app.css';
import FormInput from "./components/FormInput";
const App = () => {
 return (
  <div className="app">
    <form>
   <FormInput placeholder="Username"/>
   <FormInput placeholder="Email"/>
   <FormInput placeholder="Fullname"/>
   <FormInput placeholder="Sth else"/>
   </form>
  </div>
 );
};
export default App;
