import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { UserMiddleware, AudioListEpic } from '../../store'

function mapStateToProps(state) {
  console.log("state", state);
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
        authUser: state.AuthReducer.authUser,
        userList: state.UserReducer.userList,
        userDetail: state.UserReducer.userDetail,
        audioList: state.epicReducer.audioList


    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserList: () => dispatch(UserMiddleware.getUserList()),
        getUserDetail: (userId) => dispatch(UserMiddleware.getUserDetial(userId)),
        getAudioList: (audioData) => dispatch(AudioListEpic.getAudioListSuccessfull(audioData))
        //  fetchAudioData: function(){
        //     return dispatch(epic.getAudioListSuccessfull)
        // }

    };
}


class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        {this.props.children?React.cloneElement(this.props.children, {...this.props}):this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
//export default Dashboard;
