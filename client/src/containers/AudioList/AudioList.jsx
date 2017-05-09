/*import React, {Component} from 'react';
import { connect } from 'react-redux'

import AudioActions from '../../store/actions/audioActions.js'
import AudioList from '../../components/AudioList/AudioList'

function mapStateToProps(state){
    console.log("state", state);
  return{
      audioList: state.epicReducer
  };
}
function mapDispatchToProps(dispatch){
    return{
        fetchAudioData: function(){
            return dispatch(AudioActions.getAudioListSuccessfull)
        }
    };
}
class AudioListApp extends Component{
    render() {
        return(
            <div>
                <AudioList {...this.props}/>
            </div>

        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AudioListApp);*/
