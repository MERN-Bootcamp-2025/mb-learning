const Skills = ({skills})=>(
    <section>
        <h3>Skills</h3>
        <ul>
            {skills.map((skill,idx)=>(
                <li key={idx}>{skill}</li>
            ))}
        </ul>
    </section>
)

export default Skills;