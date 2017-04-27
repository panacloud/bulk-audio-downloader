import UserActions from "./../actions/userActions";

const INITIAL_STATE = {
    //authUser: {},
    isProcessing : false,
    isError : false,
    errorMessage: {},
    userList: [],
    userDetail : {},
    isDetailUpdated: false,
}

function UserReducer(state = INITIAL_STATE, action) {
    switch(action.type) {        
        case UserActions.GET_USER_LIST:
            return {...state, isProcessing: true, isError : false,userList:[]};
        case UserActions.GET_USER_LIST_SUCCESSFUL:
            return {...state, isProcessing: false, isError : false, userList:action.payload};
        case UserActions.ADD_USER:
            var newUserList = [...state.userList];
            newUserList.push(action.payload);
            return {...state, isProcessing: false, isError : false, userList:newUserList};
        case UserActions.GET_USER_DETAIL:
            return {...state, isProcessing: true, isError : false, userDetail: {}};
        case UserActions.GET_USER_DETAIL_SUCCESSFUL:
            return {...state, isProcessing: false ,isError : false, errorMessage: {},userDetail:action.payload};            
        case UserActions.GET_USER_DETAIL_REJECTED:
            return {...state, isProcessing: false, isError : true, errorMessage: action.payload, userDetail:{}};
        default:
            return state;
    }
}

export default UserReducer;