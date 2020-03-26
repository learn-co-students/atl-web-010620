export default (dispatch) => {
  return {
    get_sushi: (sushis) => dispatch({ type: 'GET_SUSHI', sushis: sushis }),
    more_sushi: () => dispatch({ type: 'MORE_SUSHI' }),
    eat_sushi: (sushi) => dispatch({ type: 'EAT_SUSHI', sushi: sushi })
  }
}
