const addUser = (state = 0, action) => {
  switch (action.type){
    case 'changeAddStatus':
      return !state
    default:
      return state
  }
}

export default addUser