import React from 'react'
import { connect } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = ({ anecdotes, filter }) => {
  const filteredAnecdotes = anecdotes.filter(
    anecdote => anecdote.content.toLowerCase().includes(filter)
  )

  const vote = (id) => {
    console.log('vote', id)

    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    votedAnecdote.votes += 1
    const message = `you vote '${votedAnecdote.content}'`

    addVote(id, votedAnecdote)
    setNotification(message, 5)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(AnecdoteList)
