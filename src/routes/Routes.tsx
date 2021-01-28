import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'
import {UserContext} from '../shared/provider/UserProvider'
import {useEffect, useContext} from 'react'
import { AccesoriesView } from '../view/navigationtabviews/accesories/AccesoriesView'
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView'
import { ShopView } from '../view/navigationtabviews/shop/ShopView'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { ExpertiseView } from '../view/navigationtabviews/expertiseView/ExpertiseView'

export const Routes = (props: { children: React.ReactChild }) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    useEffect(() => {
        // det som händer vid första inlogg
        if (localStorage.getItem('user')) {
        setAuthUser({username: localStorage.getItem('user')})}
    }, [])

    return (
        <BrowserRouter>
            { children }
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signInView} component={SignInView} />
                <Route exact path={RoutingPath.accesoriesView} component={AccesoriesView} />
                <Route exact path={RoutingPath.brandsView} component={BrandsView} />
                <Route exact path={RoutingPath.expertiseView} component={ExpertiseView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route component={HomeView} />

            </Switch>
        </BrowserRouter>
    )
}