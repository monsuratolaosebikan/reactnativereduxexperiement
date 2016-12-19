import {POP_ROUTE, PUSH_ROUTE} from '../actions/navActions'

export function push(route) {
    return {
        type: PUSH_ROUTE,
        route
    }
}

export function pop(route) {
    return {
        type: POP_ROUTE,
        route
    }
}