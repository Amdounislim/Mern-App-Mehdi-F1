import { GET_USERS } from "../constants/actionsTypes";

const initialState = {
    users: []
}

const reducerUser = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS:
            return { ...state, users: action.payload }

        default:
            return state;
    }

}

export default reducerUser