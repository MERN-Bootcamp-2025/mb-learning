import Bio from "./Bio";
import Contact from "./Contact";
import Header from "./Header";
import Skills from "./Skills";
import "../style/ProfileCard.css";

const ProfileCard = ({
    name = "Unknown",
    title = "No Title",
    avatar,
    bio,
    skills = [],
    email,
    social = {},
    view = "detailed"
})=>{
    return(
        <div className={`profile-card ${view}`}>
           <Header name={name} title = {title} avatar = {avatar} />
           {bio && <Bio bio={bio}/>}
           {skills.length > 0  && <Skills skills={skills}/>}
           {(email || Object.keys(social).length > 0) && <Contact email={email} social={social}/>}
        </div>
    )
    
};

export default ProfileCard;