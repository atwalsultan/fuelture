import { useState, useEffect } from "react";
import TeamMember from './TeamMember';

const TeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    const getTeamMembers = async () => {
        const response = await fetch("/api/team-members");
        const fetchedTeamMembers = await response.json();

        setTeamMembers(fetchedTeamMembers);
    }

    useEffect(() => {
        getTeamMembers();
    }, []);
    
    return (
        <section id="teamMembers">
            <h2 className="section-heading">Meet The Team</h2>

            <p className="team-intro">
                We are WMDD students from Langara College, and we finished this project within 13 weeks.
            </p>
            
            <div>
                {
                    teamMembers.map((member, index) => {
                        return (
                            <TeamMember member={member} key={`member-${index}`}></TeamMember>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default TeamMembers
