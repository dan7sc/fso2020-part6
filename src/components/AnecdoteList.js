import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {
  showNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const filteredAnecdotes = anecdotes.filter(
    anecdote => anecdote.content.toLowerCase().includes(filter)
  )

  const vote = (id) => {
    console.log('vote', id)

    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    votedAnecdote.votes += 1
    const message = `you vote '${votedAnecdote.content}'`

    dispatch(addVote(id, votedAnecdote))
    dispatch(showNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 3000)
  }

  return (
    <div>
      {filteredAnecdotes
       .sort((firstItem, secondItem) => {
         return secondItem.votes - firstItem.votes
       })
       .map(anecdote => {
         return (
           <div key={anecdote.id}>
             <div>
               {anecdote.content}
             </div>
             <div>
               has {anecdote.votes}
               <button onClick={() => vote(anecdote.id)}>vote</button>
             </div>
           </div>
         )
       })
      }
    </div>
  )
}

export default AnecdoteList
