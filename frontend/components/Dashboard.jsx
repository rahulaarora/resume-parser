import skillsData from "../data/skillsData";

const Dashboard = (props) => {
    let matchedSkills = 0
    let totalSkills = 0
    for (const role in skillsData) {
        if (Object.hasOwnProperty.call(skillsData, role)) {
            if (role == props.role) {
                totalSkills = skillsData[role].length
                props.skills.forEach(skill => {
                    if (skillsData[role].includes(skill)) {
                        matchedSkills += 1;
                    }
                });
            }
        }
    }

    return (
        <>
            <div className="p-2">
                <p>Skills Matched: {matchedSkills}</p>
                <p>Total Skills: {totalSkills}</p>
                <p>% Match: {(matchedSkills / totalSkills) * 100}%</p>
            </div>
        </>
    );
}

export default Dashboard;