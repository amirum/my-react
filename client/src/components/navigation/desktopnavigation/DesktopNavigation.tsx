import './DesktopNavigation.css'
import Logotype from '../../../shared/images/Logo.svg'
import {useContext} from 'react'
import {UserContext} from '../../../shared/provider/UserProvider'
import {Profile} from '../../profile/Profile'
import  { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const DesktopNavigation = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const history = useHistory()

    const displaySignInButtonOrUsernameDependingOnAuth = () => {
        return authUser?.username
        ? <div className= 'profile'> <Profile/> </div>
        : <span className= 'signInButton' onClick ={() => history.push(RoutingPath.signInView)}>Sign in</span>
    }

    return (
        <div className='desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={Logotype}
                alt={''} />
                <div className='desktopNavigationTabs'>
                    <DesktopNavigationTabs />
                </div>
                {displaySignInButtonOrUsernameDependingOnAuth()}
        </div>
    )
}
 