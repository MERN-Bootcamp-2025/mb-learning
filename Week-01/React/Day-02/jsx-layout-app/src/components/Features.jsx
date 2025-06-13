const features =[
    {title:"Fast", desc:"Our application is really fast."},
    {title:"Responsive", desc:"Works on all devices."},
    {title:"Accessible", desc:"Built for everyone."}
];

const Features =()=>{
    return <section className="features">
        {features.map((f,i)=>{
            return <div key={i} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
            </div>
        })}
    </section>

};

export default Features;