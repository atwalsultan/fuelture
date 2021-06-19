const TeamMember = ({member}) => {
    return (
        <div className="team-member">
            <div>
                <img src="https://picsum.photos/150" alt={member.Name} className="team-member-image" />
            </div>

            <p className="team-member-name">{member.Name}</p>
            <p className="team-member-role">{member.Role}</p>
        </div>
    )
}

export default TeamMember
