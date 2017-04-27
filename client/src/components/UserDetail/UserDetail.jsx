import React, { Component } from 'react';
import * as MUI from 'material-ui'
import styles from './UserDetailStyles';
import Person from 'material-ui/svg-icons/social/person';


//<div>Age : 45</div>
class UserDetail extends Component {


  componentWillMount() {
    this.props.getUserDetail(this.props.params.id);
  }

  //user-default
  render() {
    const {userDetail} = this.props;
    const date = new Date(userDetail.dateOfBirth);
    return (
      <div style={styles.userDetailContainer}>
        <MUI.Card>
          <MUI.CardHeader
            title={userDetail.fullName}
            subtitle={userDetail.contactNo}
            avatar={<MUI.Avatar icon={<Person />}/>}
          />
          <MUI.CardText >
            <div>Contatct No. : {userDetail.contactNo}</div>
            <div>Email. : {userDetail.email}</div>
            <div>Date Of Birth : {date.toString()}</div>
            <div>Address : {userDetail.address}</div>
          </MUI.CardText>
        </MUI.Card>
      </div>
    );
  }
}

export default UserDetail
