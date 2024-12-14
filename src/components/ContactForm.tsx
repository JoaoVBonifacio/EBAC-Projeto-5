import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addContact, editContact } from '../redux/contactsSlice.ts';

const FormWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .save {
    background-color: #4caf50;
    color: white;
  }

  .cancel {
    background-color: #f44336;
    color: white;
  }
`;

interface Props {
  contact?: { id: string; name: string; email: string; phone: string };
  onCancel?: () => void;
}

const ContactForm: React.FC<Props> = ({ contact, onCancel }) => {
  const [name, setName] = useState(contact?.name || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [phone, setPhone] = useState(contact?.phone || '');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (contact) {
      dispatch(editContact({ id: contact.id, name, email, phone }));
    } else {
      dispatch(addContact({ name, email, phone }));
    }
    setName('');
    setEmail('');
    setPhone('');
    if (onCancel) onCancel();
  };

  return (
    <FormWrapper>
      <input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="save" onClick={handleSubmit}>
        Salvar
      </button>
      {onCancel && (
        <button className="cancel" onClick={onCancel}>
          Cancelar
        </button>
      )}
    </FormWrapper>
  );
};

export default ContactForm;
