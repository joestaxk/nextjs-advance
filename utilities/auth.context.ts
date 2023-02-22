import React from 'react';
export type userProfile<T> =  {
    display_name: T,
    id: T,
    image: [any],
    country: T
}

export type authContextStateType<T> = {
    auth: T,
    userProfile: userProfile<T>
}

const authContextState = {
    auth: "",
    userProfile: {}
}

const authContext = React.createContext(authContextState as authContextStateType<string>);
 
export default authContext