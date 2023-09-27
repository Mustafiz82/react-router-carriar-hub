import React from "react";

const JObs = ({ item }) => {
	return (
		<div>
			<h1>{item.job_title}</h1>

			<p>{item.job_responsibility}</p>
			<p>{item.job_description}</p>
		</div>
	);
};

export default JObs;
