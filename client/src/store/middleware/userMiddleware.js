// import UserActions from "./../actions/userActions";
// import AuthMiddleware from "./authMiddleware";
// import * as firebase from 'firebase';

// export default class UserMiddleware {

//     /// Fetch User List Functions
//     static getUserList() {
//         console.log("getUserList");
//         return (dispatch) => {
//             dispatch(UserActions.getUserList())
//             UserMiddleware.getUserListFromFirebase(dispatch);            
//         }
//     }

//     static getUserListFromFirebase(dispatch){
//         //playersRef.orderByChild("name").equalTo("John")
//         const userListRef = firebase.database().ref('/')
//                             .child("users")
//                             // Use this property below to load specific type of users
//                             //.orderByChild("isAdmin").equalTo(true);
//         userListRef.on("child_added",function (snapshot){
//                         dispatch(UserActions.addUserToList(snapshot.val()))
//                     })
//     }

//     //Get User Detail
//     static getUserDetial(userId) {
//         console.log("getUserDetial ",userId);
//         return (dispatch) => {
//             dispatch(UserActions.getUserDetail())
//             UserMiddleware.getUserDetailFromFirebase(dispatch,userId);            
//         }
//     }

//     static getUserDetailFromFirebase(dispatch,userId){
//         firebase.database().ref('/')
//             .child(`users/${userId}`)
//             .on("value",function (snapshot){
//                 dispatch(UserActions.getUserDetailSuccessful(snapshot.val()))
//             });
//     }


// }