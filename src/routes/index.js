import { BrowserRouter, Router, Redirect, Routes, Route, Switch } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import DetailPage from "../pages/detailPage";


export const AppRouter = (props) => {

    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/details' element={<DetailPage />} />
        </Routes>
    )
}