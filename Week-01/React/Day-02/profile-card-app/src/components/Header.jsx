const Header =({name, title, avatar})=>(
    <header className="profile-header">
        {avatar ? <img src={avatar} alt="avatar"/> : <div className="placeholder-avatar">No Image</div>}
        <h2>{name}</h2>
        <h4>{title}</h4>
    </header>

);
export default Header;