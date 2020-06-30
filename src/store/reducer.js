import {
    combineReducers
} from 'redux-immutable';
/*换名*/
import {reducer as headerReducer} from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
const reducer = combineReducers({
    header: headerReducer,
    home:homeReducer
});
export default reducer;
