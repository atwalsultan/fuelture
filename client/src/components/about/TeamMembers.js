import { useState, useEffect } from "react";
import TeamMember from "./TeamMember";

const TeamMembers = () => {
	const [teamMembers, setTeamMembers] = useState([]);

	useEffect(() => {
		// Initially when the component renders the unmounted variable set to false.
		let unmounted = false;

		const getTeamMembers = async () => {

			// Set the state only when the component is mounted
			if (!unmounted) {
				const response = await fetch("/api/team-members");
				const fetchedTeamMembers = await response.json();
				setTeamMembers(fetchedTeamMembers); // .sort((a, b) => a.Role > b.Role && 1 || -1)
			}
		};
		getTeamMembers();

		// After this component gets unmounted unsubscribe any background calls.
		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<section id="teamMembers">
			<h2 className="section-heading">Meet The Team</h2>

			<p className="team-intro">
				We are Web & Mobile Apps Design & Development students from Langara College, and we finished this project
				within 13 weeks.
			</p>

			<div>
				{teamMembers.map((member, index) => {
					return (
						<TeamMember member={member} key={`member-${index}`}></TeamMember>
					);
				})}
			</div>
		</section>
	);
};

export default TeamMembers;
