const NEW_USER_DATA = 'NEW_USER_DATA';

let initialState = {
    defaultUserData: [{
        fullName: 'Name',
        address: 'Address',
        phone: '+7 777 777 77 77',
        email: 'something@mail.com'
    }]
}

export const formDataTableReducer = (state = initialState, action) => {
    return state;
}



export const addUserData = () => ({
    type: NEW_USER_DATA,
})