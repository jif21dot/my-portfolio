function ProjectCard({ title, description, github, live, technologies }) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            {technologies && (
                <div className="project-technologies">
                    {technologies.map((tech) => (
                        <span key={tech} className="technology-badge">
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            <div className="project-links">
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    View Code
                </a>

                {live && (
                    <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        View Website
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;