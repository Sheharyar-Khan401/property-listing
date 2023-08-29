import React from "react";


export const CardsView = ({ data }) => {


	return (
		<>
			{data.map((res) => {
				return (
					<div className="rounded-lg shadow-xl ">
						<div>
							<img src={res.imageUrl} />
						</div>
						<div className="p-5">
							<div className="text-xl mb-4">
								{res.title}
							</div>
							<span>Address</span>
							<div>{res.address}</div>
						</div>
					</div>
				)
			})
			}
		</>
	)
}