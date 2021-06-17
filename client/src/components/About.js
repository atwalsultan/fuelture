import { useState, useEffect } from "react";

const About = () => {
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
        <div>
            About Component
        </div>
    )
}

export default About