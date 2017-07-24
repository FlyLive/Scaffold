const initState = {
    count: 2
}

export default (state = initState, action) => {
    const count = state.count
    switch (action.type) {
        case 'INCREMENT':
            return { count: count + 1 }
        case 'DECREMENT':
            return { count: count - 1 }
        default:
            return state
    }
}