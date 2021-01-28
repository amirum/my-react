import './DesktopNavigationTabs.css'
import  { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'

export const DesktopNavigationTabs = () => {
    const history = useHistory()
    return (
        <ul className = 'ulTabWrapper'>
            <li className='liTabs' onClick={() => history.push(RoutingPath.homeView)}>Butik</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.accesoriesView)}>Acceroarer</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.brandsView)}>Varumärke</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.newsView)}>Nyheter</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.expertiseView)}>Expertis</li>
            <li className='liTabs' onClick={() => history.push(RoutingPath.shopView)}>Shop</li>
        </ul>
    )
}
