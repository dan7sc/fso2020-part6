const initialState = ''

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
  case 'FILTER':
    const filter = action.data.toLowerCase()
    return filter
  default:
    return state
  }
}

export const setFilter = (filter) => {
  return {
    type: 'FILTER',
    data: filter
  }
}

export default filterReducer
