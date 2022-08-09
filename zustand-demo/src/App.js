import React, { useEffect} from 'react';
import useStore from './store'

const App = () => {
  const state = useStore()
  console.log('state: ', state);
  const addFirstName = useStore((state) => state.addFirstName)
  const addLastName = useStore((state) => state.addLastName)
  const addUsers = useStore((state) => state.addUsers)
  const paw = useStore.getState().paw
  const unsub1 = useStore.subscribe(console.log)
  // const users = useStore.getState().users
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { firstName: state.firstName, lastName: state.lastName };
    state.users.push(newUser)
    addUsers(state.users)
    addFirstName('')
    addLastName('')
  }

  useEffect(() => {
    unsub1()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={state.firstName} onChange={(e) => (addFirstName(e.target.value))} />
      <input type="text" value={state.lastName} onChange={(e) => (addLastName(e.target.value))} />
      <button type="submit">Create</button>
      <button onClick={() => useStore.setState({ paw: false })}>paw</button>

      <div>
        {state.users.map((user, index) => (<h1 key={user.firstName || index}>Hello {user.firstName} {user.lastName}</h1>))}
      </div>
    </form>
  );
}

export default App;
