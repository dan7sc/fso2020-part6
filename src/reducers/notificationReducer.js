const notificationReducer = (state = 'INIT', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
  case 'VOTE_NOTIFICATION':
    return `you voted '${action.data.anecdote.content}'`
  case 'ANECDOTE_NOTIFICATION':
    return `added '${action.data.content}' anecdote`
  case 'REMOVE_NOTIFICATION':
    return ''
  default:
    return ''
  }
}

export const showVoteNotification = (anecdote) => {
  return {
    type: 'VOTE_NOTIFICATION',
    data: { anecdote }
  }
}

export const showAnecdoteNotification = (content) => {
  return {
    type: 'ANECDOTE_NOTIFICATION',
    data: { content }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer
