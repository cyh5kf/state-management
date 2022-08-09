import React, { useEffect} from 'react';
import { useSnapshot, subscribe  } from 'valtio'
import { subscribeKey, watch } from 'valtio/utils'
import state from './store'

const App = () => {
  const snapshot = useSnapshot(state)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName: state.firstName, lastName: state.lastName };
    state.users.push(newUser);
    state.firstName = "";
    state.lastName = "";
  }

  // Subscribe to all state changes
  const unsubscribe = subscribe(state.users, () =>
  console.log('state users has changed to111', state.users)
  )
  // Unsubscribe by calling the result
  useEffect(() => {
    unsubscribe()
    watch((get) => {
      console.log('state has changed to222', get(state.users)) // auto-subscribe on use
    })
    console.log('dom', snapshot.dom)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={snapshot.firstName} onChange={(e) => (state.firstName = e.target.value)} />
      <input type="text" value={snapshot.lastName} onChange={(e) => (state.lastName = e.target.value)} />
      <button type="submit">Create</button>

      <div>
        {snapshot.users.map((user, index) => (<h1 key={user.firstName || index}>Hello {user.firstName} {user.lastName}</h1>))}
      </div>
    </form>
  );
}

export default App;
