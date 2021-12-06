const instialState = {
    user: "",
    token: "",
};

//reduce function 
const signIn = (state = instialState , action) => {
    const {type , payload} = action;

    switch(type) {
        case "LOGIN":
            const { user , token } = payload;
            localStorage.setItem("token" , token);
            return { user , token };

        case "LOGOUT":
            localStorage.clear();
            return { user: null , token: "" };
    
        default: 
            return state;
    }
}

export default signIn;

export const log = (data) => {
    // console.log("From the reduce" , data);
    return {
        type: "LOGIN",
        payload: data
    };
};

export const logout = (data) => {
    return {
        type: "LOGOUT",
        payload: data, // { user: null , token: "" }
    };
};