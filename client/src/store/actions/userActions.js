export default class UserActions {

    static GET_USER_LIST = 'GET_USER_LIST';
    static GET_USER_LIST_SUCCESSFUL = 'GET_USER_LIST_SUCCESSFUL';
    static GET_USER_LIST_REJECTED = 'GET_USER_LIST_REJECTED';

    static ADD_USER = 'ADD_USER';

    static GET_USER_DETAIL = 'GET_USER_DETAIL';
    static GET_USER_DETAIL_SUCCESSFUL = 'GET_USER_DETAIL_SUCCESSFUL';
    static GET_USER_DETAIL_REJECTED = 'GET_USER_DETAIL_REJECTED';
    //static ADD_USER_SUCCESSFUL = 'GET_USER_LIST_SUCCESSFUL';
    //static ADD_USER_REJECTED = 'GET_USER_LIST_REJECTED';

    static getUserList() {
        return {
            type: UserActions.GET_USER_LIST
        }
    }

    static getUserListSuccessful(userList) {
        return {
            type: UserActions.GET_USER_LIST_SUCCESSFUL,
            payload: userList
        }
    }

    static addUserToList(userObj) {
        return {
            type: UserActions.ADD_USER,
            payload: userObj
        }
    }

    static getUserDetail() {
        return {
            type: UserActions.GET_USER_DETAIL
        }
    }

    static getUserDetailSuccessful(userObj) {
        return {
            type: UserActions.GET_USER_DETAIL_SUCCESSFUL,
            payload: userObj
        }
    }

    static getUserDetailRejected(error) {
        return {
            type: UserActions.GET_USER_DETAIL_REJECTED,
            payload: error
        }
    }    
}