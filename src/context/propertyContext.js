import axios from "axios";
import createDataContext from "./index.js";

const propertiesDetailReducer = (state, action) => {
    switch (action.type) {
        case "getPropertydetails":
            return {
                ...state,
                propertyDetails: action.payload,
            };
        default:
            return state;
    }
};

const getPropertyListing = async (dispatch) => {
    const response = await axios.get(`https://64ee3e821f872182714270eb.mockapi.io/property/property`);
    dispatch({
        type: "getPropertydetails",
        payload: response,
    });
};

export const { Context, Provider } = createDataContext(
    propertiesDetailReducer, 
    {
        getPropertyListing,
    }, 
    { propertyDetails: {} } 
);
