const animationStatusReducer = (state = false, action) => {
    switch (action.type) {
        case 'SWITCHSTATUS':
            return !state;
        default:
            return state;
    }
};

export default animationStatusReducer;
