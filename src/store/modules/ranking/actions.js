export const actionTypes = {
  ADD_NEW_RANKING: '@ranking/ADD_NEW_RANKING',
};

export function addNewRanking({name, score}) {
  return {
    type: actionTypes.ADD_NEW_RANKING,
    payload: {
      name,
      score,
    },
  };
}
