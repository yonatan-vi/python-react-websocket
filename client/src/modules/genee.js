
export const RESET_RESULTS = 'Genee/RESET_RESULTS';
export const SET_ONE_RESULT = 'Genee/SET_ONE_RESULT';
export const START_ANALYSIS = 'Genee/START_ANALYSIS';

export const resetResults = ()  => ({ type: RESET_RESULTS  });
export const setOneResult = result  => ({ type: SET_ONE_RESULT, result  });
export const startAnalysis = table  => ({ type: START_ANALYSIS, table  });

const NUM_ROWS = 4;
const NUM_COLS = 9;

const geneeInitialState = { 
  results: new Array(NUM_ROWS).fill(new Array(NUM_COLS).fill(0))
 };

export const geneeReducer = (state = { ...geneeInitialState }, action) => {
  switch (action.type) {
    case SET_ONE_RESULT:
      return {
        ...state,
        results: Object.assign([...state.results], {
          [action.result.row]: Object.assign([...state.results[action.result.row]], {
            [action.result.col]: action.result.val
          })
        }) 
    };
    case RESET_RESULTS:
      return { ...state, results: geneeInitialState.results};
    default:
      return state;
  }
};
