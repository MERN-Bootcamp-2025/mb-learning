import ProfileCard from "./components/ProfileCard";
import { users } from "./data/users";

const App = () =>(
  <div className="app-container">
    {users.map((user,idx)=>(
      <ProfileCard key={idx} {...user}/>
    ))}
  </div>
);

export default App;

