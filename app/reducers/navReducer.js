'use strict';

import {POP_ROUTE, PUSH_ROUTE} from '../actions/navActions'
import {NavigatorExperimental} from 'react-native'

const {
    StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
    index: 0,
    key: 'root',
    routes: [{
        key: 'home',
        title: 'Home'
    }]
};

function navigationState(state = initialState, action) {
    switch(action) {
        case 'PUSH_ROUTE':
            if(state.routes[state.index].key === (action.route && action.route.key)) {
                return state;
            }
            return NavigationStateUtils.push(state, action.route);
        case 'POP_ROUTE':
            if(state.index ===0 || state.routes.length === 1) {
                return state;
            }
            return NavigationStateUtils.pop(state);
        default:
            return state;
    }
}

export default navigationState;