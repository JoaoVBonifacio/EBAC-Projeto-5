import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import ContactForm from './components/ContactForm.tsx';
import ContactList from './components/ContactList.tsx';
import SearchBar from './components/SearchBar.tsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center' }}>Lista de contatos do Bonifácio</h1>
        <SearchBar />
        <ContactForm />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
