const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                userType: action.payload.userType, // Store the user type
                isLoading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.userData, // Store user data
                userType: state.userType, // Retain the user type
                isLoading: false,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                userType: state.userType, // Retain the user type
                isLoading: false,
                error: action.payload.error
            };
        case "LOGOUT":
            return {
                user: null,
                userType: null, // Clear the user type on logout
                isLoading: false,
                error: null
            };
        default:
            return state;
    }
};

export default AuthReducer;
