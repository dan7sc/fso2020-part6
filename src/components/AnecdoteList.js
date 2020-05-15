import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {
  showVoteNotification,
  removeNotification
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)

    dispatch(addVote(id))
    dispatch(showVoteNotification(votedAnecdote))
    setTimeout(() => {
      dispatch(removeNotification())
    }, 3000)
  }

  return (
    <div>
      {anecdotes
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
