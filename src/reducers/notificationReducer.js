const initialState = ''

const notificationReducer = (state = 'INIT', action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
  case 'SET_NOTIFICATION':
    return action.data.message
  case 'REMOVE_NOTIFICATION':
    return action.data.message
  default:
    return initialState
  }
}

export const showNotification = (message) => {
  return {
    type: 'SET_NOTIFICATION',
    data: { message }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
    data: { message: '' }
  }
}

export default notificationReducer
