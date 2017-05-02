import { Observable} from "rxjs"
import * as firebase from 'firebase'
import UserActions from '../actions/userActions'


export class UserEpic{
    static Login  = (action$ =>
      action$.ofType(UserActions.USER_LIST)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(ref.push(payload))
                    .map((x) => {
                        return { type: UserActions.NULL };
                    })  
            })
    )
}