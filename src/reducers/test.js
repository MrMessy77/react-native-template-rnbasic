import { handleActions } from 'redux-actions';
import { TEST } from '../constants';

const initState = {};

export default handleActions({
    [TEST]: (state, { payload }) => ({ ...state, ...payload })
}, initState)

export const setTest = () => async () => {
};