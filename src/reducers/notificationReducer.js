const notificationReducer = (state = '', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
  case 'SET_NOTIFICATION':
    return action.data
  case 'CLEAR_NOTIFICATION':
    return ''
  default:
    return state
  }
}

export const setNotification = (message, time) => {
  const timeMs = time * 1000

  return async dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_NOTIFICATION',
      })
    }, timeMs)
    dispatch({
      type: 'SET_NOTIFICATION',
      data: message
    })
  }
}

export default notificationReducer
