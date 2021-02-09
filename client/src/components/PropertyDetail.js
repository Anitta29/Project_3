import React from "react";

function PropertyDetail({ property }) {
	console.log(property);
	return (
		<div className="text-center">
			<img
				className="img-fluid"
				src={property.thumbnail}
				style={{ margin: "0 auto" }}
			/>
			<h3>Beds: {property.beds}</h3>
			<h3>Baths: {property.baths}</h3>
			<h3>Price: ${property.price}</h3>
			<h3>Sqft: {property.lot_size?.size || 0} sqft</h3>
			<h3>
				Address: {property.address.line}, {property.address.city},{" "}
				{property.address.state_code} {property.postal_code}
			</h3>
		</div>
	);
}

export default PropertyDetail;
