function About() {
    const skills = "HTML, CSS, JavaScript and React";

    return (
        <section id="about" className="about">
            <h2>About Me</h2>

            <p>
                I'm an aspiring front-end developer who enjoys
                building websites and learning new technologies.
            </p>

            <p>
                I've been developing my skills through practical
                projects, including Recipe Finder, Green Gardens and Maple & Mug.
            </p>

            <p>
                My current skiils include {skills}.
            </p>
        </section>
    )
}

export default About;