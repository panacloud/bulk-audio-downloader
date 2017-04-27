import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dashboard.css';
import { UserMiddleware } from '../../store'

function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
        authUser: state.AuthReducer.authUser,
        userList: state.UserReducer.userList,
        userDetail: state.UserReducer.userDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserList: () => dispatch(UserMiddleware.getUserList()),
        getUserDetail: (userId) => dispatch(UserMiddleware.getUserDetial(userId))
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
