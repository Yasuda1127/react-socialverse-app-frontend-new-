// actionを呼ぶ

export const loginCall = async (user,dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {

    } catch(err) {
        dispatch({type: "LOGIN_ERROR",} )
    }
}
