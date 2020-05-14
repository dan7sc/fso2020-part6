const initialState = 'start notification'

const notificationReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
  case 'SHOW_NOTIFICATION':
    return state
  default:
    return state
  }
}

export default notificationReducer
