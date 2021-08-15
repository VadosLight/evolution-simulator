import { Dispatch } from 'react';

type World = {
  iteration: number;
  pause: boolean;
  width: number;
  height: number;
  cellSize: number;
};

enum ActionTypes {
  INCREMENT_ITERATION = 'INCREMENT_ITERATION',
  TOGGLE_PAUSE = 'TOGGLE_PAUSE',
  SET_WIDTH = 'SET_WIDTH',
  SET_HEIGHT = 'SET_HEIGHT',
  SET_CELL_SIZE = 'SET_CELL_SIZE',
}

// Actions

type ActIncrementIteration = {
  type: ActionTypes.INCREMENT_ITERATION;
};
type ActTogglePause = {
  type: ActionTypes.TOGGLE_PAUSE;
};
type ActSetCellSize = {
  type: ActionTypes.SET_CELL_SIZE;
  cellSize: number;
};
type ActSetHeight = {
  type: ActionTypes.SET_HEIGHT;
  width: number;
};
type ActSetWidth = {
  type: ActionTypes.SET_WIDTH;
  width: number;
};

type Actions = {
  ActIncrementIteration: ActIncrementIteration;
  ActTogglePause: ActTogglePause;
  ActSetCellSize: ActSetCellSize;
  ActSetHeight: ActSetHeight;
  ActSetWidth: ActSetWidth;
};

type ActionType = Actions[keyof Actions];

// Reducer and initialState

const initialState: World = {
  iteration: 0,
  pause: true,
  width: 1000,
  height: 1000,
  cellSize: 30,
};

export const worldReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypes.SET_WIDTH:
      return { ...state, width: action.width };

    case ActionTypes.INCREMENT_ITERATION: {
      if (state.pause) {
        return { ...state };
      }
      return { ...state, iteration: state.iteration + 1 };
    }

    case ActionTypes.TOGGLE_PAUSE:
      return { ...state, pause: !state.pause };

    default:
      break;
  }
  return state;
};

// Action creators

const creatorIterateWorld = (): ActIncrementIteration => ({
  type: ActionTypes.INCREMENT_ITERATION,
});

const creatorTogglePause = (): ActTogglePause => ({
  type: ActionTypes.TOGGLE_PAUSE,
});

// Thunks
export const thunkIterateWorld = () => (dispatch: Dispatch<ActIncrementIteration>) => dispatch(creatorIterateWorld());

export const thunkTogglePause = () => (dispatch: Dispatch<ActTogglePause>) => dispatch(creatorTogglePause());
