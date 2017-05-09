import { Observable} from "rxjs"
import AudioActions from '../actions/audioActions'

export default class AudioListEpic{

    static getAudioData(actions$){
        return actions$.ofType(AudioActions.GET_DATA)
        .mergeMap(() => {
            return Observable.ajax("https://api.github.com/users/farooqmajeed/repos")
            .pluck("response")
            .switchMap((data) =>{
                return Observable.of(AudioActions.getAudioListSuccessfull(data))
            })
        })
    }
}   