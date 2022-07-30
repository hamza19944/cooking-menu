import { createStore } from "redux";

// increment function
const incrementcount = ({incrementBy = 1} = {}) => {
    
}


const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count : state.count + action.incrementBy }
        case "DECREMENT":
            return
        default:
            break;
    }
})

