const step = (state = 0, action) => {
  switch (action.type) {
    case 'increaseStep':
      return state + 1
    case 'decreaseStep':
      return state - 1
    default:
      return state
  }
}

export default step