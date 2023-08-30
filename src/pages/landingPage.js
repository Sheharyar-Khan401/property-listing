import React, { useState, useEffect, useContext } from "react";
import PropertyTable from "../components/propertyTable";
import { ToogleBtn } from "../components/toogleButton";
import { CardsView } from "../components/cardsView";
import { Context as PropertyContext } from '../context/propertyContext';
import axios from "axios";


const LandingPage = () => {

    const [pageView, setPageView] = useState(false)
    const [propertiesDetails, setPropertiesDetails] = useState([])

    useEffect(() => {
        getPropertyListing()
    }, [])

    const getPropertyListing = async () => {
        const response = await axios.get(`https://64ee3e821f872182714270eb.mockapi.io/property/property`);
        setPropertiesDetails(response?.data)
    }


    return (
        <div>
            <ToogleBtn setPageView={setPageView} value={pageView} />
            {
                !pageView ?
                    <div className="m-auto w-fit h-screen flex items-center">
                        <PropertyTable data={propertiesDetails} />
                    </div>
                    :
                    <div className="grid grid-cols-4 gap-4 my-10">
                        <CardsView data={propertiesDetails} />
                    </div>
            }
        </div>
    )
}
export default LandingPage