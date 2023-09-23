import React, { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const Featured = () => {
	const [job, setJob] = useState([]);
    const [dataLength , setDatalength] = useState(4)

	useEffect(() => {
		fetch("jobs.json")
			.then((res) => res.json())
			.then((data) => setJob(data)).th;
	}, []);
	return (
		<div className="text-center ">
			<h1 className="text-5xl font-bold">Featured Jobs {job.length}</h1>
			<p>
				Explore thousands of job opportunities with all the information you
				need. Its your future
			</p>

			<div className="grid grid-cols-2 gap-10 justify-center mt-20">
				{job.slice(0,dataLength).map((item) => (
					<FeaturedJob
						key={job.id}
						item={item}
					></FeaturedJob>
				))}
			</div>

			<button onClick={() => {setDatalength(job.length)}} className={`btn btn-primary text-center ${dataLength === job.length && "hidden"}`}>See all jobs</button>
		</div>
	);
};

export default Featured;
