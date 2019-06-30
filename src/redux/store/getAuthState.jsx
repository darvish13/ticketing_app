import { history } from './../../react/history';

export default function getAuthState() {
    try {
        const auth = JSON.parse(sessionStorage.getItem('authInfo'))

        return { auth }
    } catch (err) { 
        history.push('/login')
     }
}