import './ProfileDropDown.css'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const ProfileDropDown = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const history=useHistory()

    const logout = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        history.push(RoutingPath.homeView)
    }

    return (
        <div className='profileDropdown'>
            <span>alternativ 1</span>
            <span>alternativ 2</span>
            <span>alternativ 3</span>
            <span onClick={() => logout()}>Sign out</span>
            
        </div>
    )
}


