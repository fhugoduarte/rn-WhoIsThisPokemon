import produce from 'immer';

import {actionTypes} from './actions';

const INITIAL_STATE = {
  data: [],
};

export default function(state = INITIAL_STATE, action) {
  const {type, payload} = action;

  return produce(state, draft => {
    switch (type) {
      case actionTypes.ADD_NEW_RANKING: {
        draft.data.push(payload);
        draft.data = draft.data.sort((a, b) => b.score - a.score);

        if (draft.data.length > 10) {
          draft.data.pop();
        }
        break;
      }
      default:
        break;
    }
  });
}
