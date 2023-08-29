import { BrowserRouter, Router, Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/landingPage";


export const AppRouter = (props) => {
    
    const myRoutes = (
        <Switch>
            <Route exact path={'/'}>
                <LandingPage />
            </Route>
        </Switch>
    )

    return (
        <div>
            <BrowserRouter>
                {myRoutes}
            </BrowserRouter>
        </div>
    )
}