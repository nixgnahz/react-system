export const addStaff = (state = 0, action) => {
  switch (action.type) {
    case 'changeAddStatus':
      return !state
    default:
      return state
  }
}

export const assign = (state = 0, action) => {
  switch (action.type) {
    case 'changeAssignStatus':
      return !state
    default:
      return state

  }
}