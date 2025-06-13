const Sidebar =()=>{
    const showTips = true;

    return(
        <div className="sidebar">
            <h3>Sidebar Widgets</h3>
            {showTips ? (
                <ul>
                    <li>Tip 1: Use Semantic Tags</li>
                    <li>Tip 2: Keep components small</li>
                </ul>
            ) : (
                <p>No tips available.</p>
            )}
        </div>
    );
};

export default Sidebar;