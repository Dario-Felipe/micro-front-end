import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { utils } from '@df/utils';

import { PayloadTypes } from './types/form';

const App = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(!inputValue.length) {
      return;
    }

    dispatchEvent(new CustomEvent<PayloadTypes>('@df/form/todo/add-task', {
      detail: {
        id: uuid(),
        description: inputValue
      }
    }));

    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='input' type="text" placeholder="Nome da tarefa" value={inputValue} onChange={handleChange} />

      <button type="submit">Adicionar</button>
    </form>
  );
};

export default App;
