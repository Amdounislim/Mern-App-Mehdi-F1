import { GET_USERS, GET_USER_BY_ID, TOGGLE_FALSE, TOGGLE_TRUE } from "../constants/actionsTypes";

const initialState = {
    users: [],
    userId: {},
    isEdit: false
}

const reducerUser = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }

        case GET_USER_BY_ID:
            return { ...state, userId: action.payload[0] }

        case TOGGLE_TRUE:
            return { ...state, isEdit: true }

        case TOGGLE_FALSE:
            return { ...state, isEdit: false }

        default:
            return state;
    }

}

export default reducerUser