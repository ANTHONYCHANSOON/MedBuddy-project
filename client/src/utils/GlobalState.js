import React, { createContext, useReducer, useContext } from "react";
import {
    ADD_ARTICLES,
    USER_SIGN_UP,
    GRAB_USER_INFO,
    GRAB_USER_ROUTINE
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            console.log(action.newUser);
            return { ...state, user: action.newUser };
        case ADD_ARTICLES:
            console.log(action);
            return { ...state, headline: action.articles };
        case GRAB_USER_INFO:
            //console.log("action", action.transferMe)
            return { ...state, user: action.transferMe };
        case GRAB_USER_ROUTINE:
            console.log("action", action.payload)
            return { ...state, medroutine: action.payload, logged: true };

        default: throw new Error("action doesnt exist")
    }
}

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        logged: false,
        headline: [],
        user: {
            id: 0,
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: ""
        },
        medroutine: [{
            id: 0,
            datecount: 0,
            dosage: 0,
            dose: 0,
            userid: 0,
            MedLogs: [{
                id: 0,
                date: Date.now(),
                time: 0,
                status: false,
                medroutineid: 0
            }]
        }],
        Medicine : [{
            id : 0,
            medicinename : ""
        }]
    })
    return < Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext, StoreContext };
