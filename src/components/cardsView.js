import React from "react";
import { useNavigate } from 'react-router-dom';

export const CardsView = ({ data }) => {

	const navigate = useNavigate()

	return (
		<>
			{data.map((res) => {
				return (
					<div className="rounded-lg shadow-xl " onClick={() => { navigate('/details', { state: res }) }}>
						<div className="image-container h-56">
							<img src={res.imageUrl} className="object-cover h-full w-full " />
						</div>
						<div className="p-5">
							<div className="text-xl mb-4">
								{res.title}
							</div>
							<span className="text-slate-600 text-sm">Address</span>
							<div className="text-base">{res.address}</div>
							<div className="text-slate-600 text-sm mt-4">Description</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id urna at turpis mollis lobortis non ut magna.</p>
							<div className="mt-4 text-right">
								<span className="text-slate-600 text-sm mt-4">Price: </span>
								${res.price}
							</div>
						</div>
					</div>
				)
			})
			}
		</>
	)
}