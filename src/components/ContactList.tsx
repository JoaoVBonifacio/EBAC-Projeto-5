import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../redux/store.ts';
import { removeContact } from '../redux/contactsSlice.ts';
import ContactForm from './ContactForm.tsx';

const ListWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  .actions {
    display: flex;
    gap: 5px;
  }

  button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .edit {
    background-color: #555;
    color: white;
  }

  .remove {
    background-color: #f44336;
    color: white;
  }
`;

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const searchQuery = useSelector((state: RootState) => state.contacts.searchQuery);
  const [editingContact, setEditingContact] = useState<string | null>(null);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {editingContact && (
        <ContactForm
          contact={contacts.find(contact => contact.id === editingContact)}
          onCancel={() => setEditingContact(null)}
        />
      )}
      <ListWrapper>
        <thead>
          <tr>
            <th>Nome completo</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className="actions">
                <button
                  className="edit"
                  onClick={() => setEditingContact(contact.id)}
                >
                  Editar
                </button>
                <button
                  className="remove"
                  onClick={() => dispatch(removeContact(contact.id))}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ListWrapper>
    </>
  );
};

export default ContactList;
