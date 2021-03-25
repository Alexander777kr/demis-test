import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import FormPage from './components/Form/Form';
import Header from './components/Header/Header';
import FormDataTable from './components/Form/FormDataTable';

function App() {
  return (
    <div >
      <Header />
      <FormPage />
      <FormDataTable />
      <Footer />
    </div>
  );
}

export default App;
