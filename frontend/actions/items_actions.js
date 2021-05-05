import * as APIUtil from '../util/api_util';
export const RECEIVE_ITEM = "RECEIVE_ITEM"

export const receiveItem = (items) => ({
    type: RECEIVE_ITEM,
    items
})
