import TeamMember from "./TeamMember";

const TeamMembers = () => {
  const teamMembers = [
    {
      Name: "Jane Doe",
      Role: "User Interface / Experience Designer",
      Linkedin: "",
      Github: "",
      Stackoverflow: "",
    },
    {
      Name: "Jane Doe",
      Role: "UI/UX Designer, Project Manager",
      Linkedin: "",
      Github: "",
      Stackoverflow: "",
    },
    {
      Name: "John Doe",
      Role: "User Interface / Experience Designer",
      Linkedin: "",
      Github: "",
      Stackoverflow: "",
    },
    {
      Name: "John Doe",
      Role: "User Interface / Experience Designer",
      Linkedin: "",
      Github: "",
      Stackoverflow: "",
    },
    {
      Name: "John Doe",
      Role: "Backend / Full Stack Developer",
      Linkedin: "",
      Github: "xyz",
      Stackoverflow: "",
    },
    {
      Name: "John Doe",
      Role: "Frontend / Full Stack Developer",
      Linkedin: "",
      Github: "xyz",
      Stackoverflow: "xyz",
    },
  ];

  return (
    <section id="teamMembers">
      <h2 className="section-heading">Meet The Team</h2>

      <p className="team-intro">
        We are Web & Mobile Apps Design & Development students from Langara
        College, and we finished this project within 13 weeks.
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
