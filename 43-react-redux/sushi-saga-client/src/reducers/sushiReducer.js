const sushiReducer = (state = { sushis: [], offset: 0 },action) => {
  switch (action.type) {
    case 'GET_SUSHI':
      return {
        ...state,
        sushis: action.sushis
      }

    case 'MORE_SUSHI':
      if(state.offset + 4 >= state.sushis.length){
        return { ...state, offset: 0 }
      }else{
        return { ...state, offset: state.offset + 4 }
      }
      default:
        return state
    }
}

export default sushiReducer;
