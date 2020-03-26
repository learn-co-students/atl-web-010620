const walletReducer = (state={eatSushi: [], wallet: 100 },action) => {

  switch (action.type) {
    case 'EAT_SUSHI':
      const sushi = action.sushi
      const eaten = state.eatSushi.filter(eatenSushi => eatenSushi.id === sushi.id).length > 0 ? true : false
      const enoughMoney = state.wallet >= sushi.price ? true : false
      if(!eaten && enoughMoney){
          return {
            ...state,
            eatSushi: [...state.eatSushi, sushi],
            wallet: state.wallet-sushi.price}
      }else{
        return state
      }

    default:
      return state
  }
}

export default walletReducer;
