import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)

    const action = {
      type: 'VOTE_ANECDOTE',
      data: { id }
    }
    dispatch(action)
  }

  const addAnecdote = (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content
      }
    }
    dispatch(action)
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes
       .sort((firstItem, secondItem) =>
         secondItem.votes - firstItem.votes)
       .map(anecdote =>
         <div key={anecdote.id}>
           <div>
             {anecdote.content}
           </div>
           <div>
             has {anecdote.votes}
             <button onClick={() => vote(anecdote.id)}>vote</button>
           </div>
         </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
