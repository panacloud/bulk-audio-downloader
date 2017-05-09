import React, { Component } from 'react';
import * as MUI from 'material-ui'
// import SvgIconFace from 'material-ui/svg-icons/action/face';
import styles from './AudioListStyle.js'
import logo from '../../images/user-default.png'
import SvgIconSearch from 'material-ui/svg-icons/action/search'


class AudioList extends Component {


//   componentDidMount() {
//       console.log("props", this.props.fetchAudioData);
//     this.props.fetchAudioData();
//   }

    render() {
        return (

            <div >
                <MUI.Card style={styles.muiListContainer}>
                    <MUI.AppBar showMenuIconButton={false} style={styles.appbarContainer} >
                        <MUI.Avatar icon={<SvgIconSearch />} style={styles.searchBar} />
                        <MUI.TextField
                            hintText="Test searching"
                            fullWidth={true}
                            style={styles.textFeild}
                        />
                    </MUI.AppBar>
                    <br />

                    <div style={styles.wrapper} >
                        <MUI.Chip
                           
                            style={styles.chip}
                            
                        >
                            <MUI.Avatar src={logo} />
                            testing chip
                        </MUI.Chip>

                        <MUI.Chip
                            
                            style={styles.chip}
                        >
                            <MUI.Avatar src={logo} />
                            testing Chip
                        </MUI.Chip>

                        <MUI.Chip
                            
                            style={styles.chip}
                        >
                            <MUI.Avatar src={logo} />
                            testing Chip
                        </MUI.Chip>
                        <MUI.Chip
                            
                            style={styles.chip}
                            
                        >
                            <MUI.Avatar src={logo} />
                            testing chip
                        </MUI.Chip>

                        <MUI.Chip
                            
                            style={styles.chip}
                        >
                            <MUI.Avatar src={logo} />
                            testing Chip
                        </MUI.Chip>

                        <MUI.Chip
                           
                            style={styles.chip}
                        >
                            <MUI.Avatar src={logo} />
                            testing Chip
                        </MUI.Chip>


                    </div>

                </MUI.Card>
                <br />

                <div style={styles.buttonConainer}>
                    <MUI.RaisedButton  label="Download" onClick={this.props.fetchAudioData}  primary={true} />
                </div>
            </div>

        );

    }
}
export default AudioList;
