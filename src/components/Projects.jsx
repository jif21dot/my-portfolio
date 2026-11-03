import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>

            <div className="projects-grid">
                <ProjectCard
                  title="Data Explorer"
                  description="A project exploring data using JavaScript."
                  github="https://github.com/jif21dot/data-explorer"
                  live="https://jif21dot.github.io/data-explorer/"
                  technologies={["HTML", "CSS", "JavaScript"]}
                />

                <ProjectCard
                  title="Recipe Finder"
                  description="A website that helps users find recipes."
                  github="https://github.com/jif21dot/recipe-finder"
                  live="https://jif21dot.github.io/recipe-finder/"
                  technologies={["HTML", "CSS", "JavaScript"]}
                />

                <ProjectCard
                  title="Green Gardens"
                  description="A gardening-themed website."
                  github="https://github.com/jif21dot/green-gardens"
                  live="https://jif21dot.github.io/green-gardens/"
                  technologies={["HTML", "CSS", "JavaScript"]}
                />

                <ProjectCard
                  title="Maple & Mug"
                  description="A coffee shop website"
                  github="https://github.com/jif21dot/maple-and-mug"
                  live="https://jif21dot.github.io/maple-and-mug/"
                  technologies={["HTML", "CSS", "JavaScript"]}
                />
            </div> 
        </section>
    );
}

export default Projects;