import React, { useEffect, useState } from 'react';

import { PayloadTypes } from './types/form';

const App = () => {
  const [toDos, setToDos] = useState<PayloadTypes[]>([]);

  useEffect(() => {
    addEventListener('@df/form/todo/add-task', (event: CustomEvent<PayloadTypes>) => {
      const newToDo: PayloadTypes = event.detail;

      setToDos(oldToDos => {
        return [
          ...oldToDos,
          newToDo
        ]
      })
    })
  }, []);

  return (
    <ul>
      {toDos.map(toDo => (
        <li key={toDo.id}>
          <b>Id:</b> {toDo.id} - <b>Description:</b> {toDo.description}
        </li>
      ))}
    </ul>
  )
}

export default App;