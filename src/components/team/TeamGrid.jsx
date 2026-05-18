import teamData from "../../data/teamData";
import TeamCard from "./TeamCard";

function TeamGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {teamData.map((member) => (
        <TeamCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
}

export default TeamGrid;