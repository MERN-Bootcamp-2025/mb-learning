const Contact = ({email, social}) =>(
    <section className="profile-contact">
        {email && <p>Email: {email}</p>}
        {social.linkedIn && <a href={social.linkedIn}>LinkedIn</a>}
        {social.github && <a href={social.github}>GitHub</a>}
    </section>
);

export default Contact;