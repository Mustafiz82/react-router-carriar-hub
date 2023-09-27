import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import JObs from "./JObs";

const JobDescription = () => {
	const data = useLoaderData();
    const {id} = useParams()
    const job = data.find(job => job.id == id)
	console.log(job);
	return (
		<div>
			<h2>ooooooooooooooooooooooooooooooooo</h2>
			{
                data.map(item => <JObs key={data.id} item={item}></JObs>)
            }
		</div>
	);
};

export default JobDescription;
