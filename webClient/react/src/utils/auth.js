/**
 * Created by ben on 15/12/26.
 */
import history from './history';
let authCheck = (authenticated, failUrl, sucUrl) => {
    console.log(authenticated);
    if (!authenticated) {
        history.pushState(null, failUrl);
    } else if (typeof sucUrl != "undefined") {
        history.pushState(null, sucUrl);
    }
}

export {authCheck}