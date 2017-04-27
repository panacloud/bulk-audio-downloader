import React, { Component,PropTypes } from 'react';
import * as MUI from 'material-ui'
import styles from './UserListStyles';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';

class UserList extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(){
    super();
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }
  
  handleListItemClick = (id) => this.context.router.push("/dashboard/userlist/"+id);

  listUsers(){
    console.log("list users");
    var listItems = this.props.userList
      .filter((user=>user.uid!==this.props.authUser.uid))
      .map(user=> {
      console.log("User item ",user);
      return (<div key={user.uid}>
                <MUI.ListItem                    
                    leftAvatar={<MUI.Avatar icon={<Person />} />}
                    rightIcon={<ActionInfo />}
                    primaryText={user.fullName}
                    secondaryText={"Contatct No: "+user.contactNo}
                    onTouchTap={()=>this.handleListItemClick(user.uid)}
                  />
                  <MUI.Divider />
             </div>
             )
    })

    return listItems;
  }

  componentWillMount() {
    if(this.props.isAuthenticated){
      this.props.getUserList();
    }
  }

  render() {
    
    return (
      
      <div style={styles.userListContainer}>
          
          <MUI.List>
            <MUI.Subheader style={styles.subHeader} inset={false}>User List</MUI.Subheader>
            {
              this.listUsers()
            }
          </MUI.List>
        </div>
    );
  }
}

export default UserList
