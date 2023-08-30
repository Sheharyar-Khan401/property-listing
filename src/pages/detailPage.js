import React from "react";
import { useLocation } from 'react-router-dom'


const DetailPage = () => {

    const location = useLocation()
    console.log('location', location);

    //Added a random description based on the information coming from the API
    return (
        <div className="columns-2 gap-8 mt-10">
            <img src={location.state.imageUrl} />
            <div>
                <div className="text-2xl my-5">
                    {location.state.title}
                </div>
                <span className="font-light text-sm">Address</span>
                <div className="mb-5">{location.state.address}</div>
                <div className="font-semibold text-base">Description</div>
                <p>
                    Discover the epitome of luxurious living with this exceptional property, boasting an impressive 84 bedrooms and 85 bathrooms. With an expansive covered area of approximately 810 square feet, this residence redefines comfort and sophistication.
                    Nestled in a serene neighborhood, this property is a true gem that stands as a testament to refined living. The grandeur of this estate is immediately evident, offering a harmonious blend of opulence and functionality. Whether you're looking for a spacious family home or considering investment options, this property caters to a multitude of aspirations.
                    <br />
                    <br />
                    <span className="font-semibold">Property Features:</span>
                    <br />
                    <ul>
                        <li><strong className="font-semibold">Bedrooms: </strong>{location.state.beds}</li>
                        <li><strong className="font-semibold">Bathrooms: </strong>{location.state.bath}</li>
                        <li><strong className="font-semibold">Covered Area: </strong> {location.state.coveredAreaSQFT}</li>
                        <li><strong className="font-semibold">Property Type: </strong> {location.state.propertyType}</li>
                        <li><strong className="font-semibold">Commercial Use: </strong> {location.state.isCommercial ? "yes" : "no"}</li>
                        <li><strong className="font-semibold">Price: </strong>${location.state.price}</li>
                    </ul>
                    <br />
                    Step into a world of elegance as you explore the well-designed interiors and intricately crafted spaces. Each bedroom is a sanctuary of comfort, offering ample space for relaxation and privacy. The 85 bathrooms ensure convenience and luxury for every resident and guest.
                    The expansive covered area of 810 square feet provides endless possibilities to create your dream living environment. From spacious lounges to cozy corners, this property offers the canvas to express your personal style and design preferences.
                    Located in a residential setting, this property is an oasis of tranquility while still being within easy reach of essential amenities, schools, parks, and shopping centers. The aura of exclusivity combined with the warmth of a welcoming community makes this property truly special.
                    Indulge in a lifestyle where comfort and sophistication intertwine seamlessly. Priced at $500.00, this property represents an incredible opportunity to own a piece of architectural magnificence. Don't miss the chance to experience luxury living at its finest.
                    Contact us today to schedule a viewing and witness firsthand the allure and charm that this remarkable property exudes.
                </p>
            </div>
        </div>
    )
}
export default DetailPage