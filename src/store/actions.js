export const CLICK_FIELD = 'CLICK_FIELD';
export const CLICKED_FIELD = 'CLICKED_FIELD';
export const START_GAME = 'START_GAME';
export const COMPLETE_GAME = 'COMPLETE_GAME';
export const RESET_GAME = 'RESET_GAME';
export const TOGGLE_MENU_BUTTON = 'TOGGLE_MENU_BUTTON';

export const SKIP_TURN = 'SKIP_TURN';
export const DECREMENT_TIMER = 'DECREMENT_TIMER';

export const clickField = fieldIndex => ({ type: CLICK_FIELD, fieldIndex });
export const startGame = () => ({ type: START_GAME });
export const resetGame = () => ({ type: RESET_GAME });
export const decrementTimer = () => ({ type: DECREMENT_TIMER });
export const skipTurn = () => ({ type: SKIP_TURN });
export const toggleMenuButton = () => ({ type: TOGGLE_MENU_BUTTON });
