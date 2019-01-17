export const CLICK_FIELD = 'CLICK_FIELD';
export const CLICKED_FIELD = 'CLICKED_FIELD';
export const RESET_TIMER = 'RESET_TIMER';
export const DECREMENT_TIMER = 'DECREMENT_TIMER';
export const COMPLETE_GAME = 'COMPLETE_GAME';
export const CHECK_WINNER = 'CHECK_WINNER';

export const clickField = fieldIndex => ({ type: CLICK_FIELD, fieldIndex });
