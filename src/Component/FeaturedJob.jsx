import React from "react";

const FeaturedJob = ({ item }) => {
	const {
        id,
		logo,
		job_title,
		company_name,
		remote_or_onsite,
		location,
		job_type,
		salary,
	} = item;
	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl text-left">
				<figure>
					<img
						src={logo}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body space-y-">
					<h2 className="card-title">{job_title}</h2>
					<p>{company_name}</p>
					<div className="space-y-3">
						<button className="px-5 py-2 text-[#9873FF] border-2 border-[#9873FF] mr-2">
							{remote_or_onsite}
						</button>
						<button className="px-5 py-2 text-[#9873FF] border-2 border-[#9873FF] mr-2">
							{job_type}
						</button>
                        <div className="flex gap-4">
                            <span>{location}</span>
                            <span> salary: {salary}</span>
                        </div>
					</div>

					<div className="card-actions ">
						<button className="btn btn-primary">See discription</button>
                        {/* <NavLink to="/AppliedJobs">Applied Jobs</NavLink> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedJob;
