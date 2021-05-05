import * as APIUtil from '../util/api_util';
export const RECEIVE_MOVE = "RECEIVE_MOVE"

export const receiveMove = (moves) => ({
    type: RECEIVE_MOVE,
    moves
})
