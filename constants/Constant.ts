export const httpHeaders = {
    post: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
}


export function mapStateToProps(state) {
    return { action: state.action, data: state.data, token: state.token };
}


export function mapDispatchToProps(dispatch) {
    return {
        userData: (data) => 
        dispatch({
            type: "USER_DATA",
            data
        }),
        userSession: (token) => 
        dispatch({
            type: "SESSION",
            token
        })
    };
}