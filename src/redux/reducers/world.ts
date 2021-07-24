type World = {
  width: number;
  height: number;
  cellSize: number;
};

enum ActionTypes {
  SET_WIDTH = 'SET_WIDTH',
  SET_HEIGHT = 'SET_HEIGHT',
  SET_CELL_SIZE = 'SET_CELL_SIZE',
}

type Actions = {
    ActSetCellSize: {
        type: ActionTypes.SET_CELL_SIZE;
        cellSize: number;
    };
    ActSetHeight: {
        type: ActionTypes.SET_HEIGHT;
        width: number;
    },
    ActSetWidth : {
        type: ActionTypes.SET_WIDTH;
        width: number;
    }
}

type ActionType = Actions[keyof Actions];

const initialState = {
  width: 1000,
  height: 1000,
};

export const worldReducer = (state = initialState, action: ActionType) => {
    switch(action.type)
};
