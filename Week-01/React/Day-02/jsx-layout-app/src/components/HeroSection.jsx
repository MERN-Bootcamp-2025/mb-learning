const HeroSection = ()=>{
    const today = new Date().toLocaleDateString();

    return(
        <section className="hero">
            <h2>Welcome to my App!</h2> 
            <p>Today's Date: {today}</p>
            <button style={{padding:"10px", background: "var(--primary-color"}}>Get Started</button>
        </section>
    )
};

export default HeroSection;