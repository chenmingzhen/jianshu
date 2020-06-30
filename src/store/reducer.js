import {
    combineReducers
} from 'redux-immutable';
/*换名*/
import {reducer as headerReducer} from '../common/header/store';

const reducer = combineReducers({
    header: headerReducer
});
export default reducer;
