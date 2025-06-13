const Navigation = ()=>{
    return(
        <nav className="app-nav">
        <ul>
            {["Home","About","Features","Contact"].map((item,i)=>(
                <li key={i}>
                    <a href="#">{item}</a>
                </li>
            ))}
        </ul>

    </nav>
    );
};

export default Navigation;
