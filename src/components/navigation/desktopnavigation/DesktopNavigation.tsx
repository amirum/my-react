import './DesktopNavigation.css'
import Logotype from '../../../shared/images/Logo.svg'

export const DesktopNavigation = () => {
    return (
        <div className='desktopNavigationWrapper'>
            <img className='navigationLogotype'
                src={Logotype}
                alt={''} />
        </div>
    )
}
