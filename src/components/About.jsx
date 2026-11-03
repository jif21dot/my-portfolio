function About() {
    const skills = ["HTML", "CSS", "JavaScript", "React"];

    return (
        <section id="about" className="about">
            <h2>About Me</h2>

            <p>
                I'm a front-end developer who enjoys learning new 
                technologies and building websites from scratch.
                I've been developing my skills in HTML, CSS, 
                JavaScript and React through hands-on projects.

                I enjoy solving problems, experimenting with
                different designs and creating websites that
                are both functional and easy to use.
            </p>

            <p>
                I've been developing my skills through practical
                projects, including Recipe Finder, Green Gardens and Maple & Mug.
            </p>

            <p>
            <div className="skills-list">
                {skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                        {skill}
                    </span>
                ))}
            </div>
            </p>
        </section>
    )
}

export default About;