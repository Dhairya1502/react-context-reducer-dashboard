function Projects() {
  const projects = [
    {
      title: "Task Manager System",
      desc: "A complete task management system using React Hooks and Context API."
    },
    {
      title: "Multi-page React App",
      desc: "Implemented routing using React Router with smooth navigation."
    },
    {
      title: "Analytics Dashboard",
      desc: "Real-time summary calculation using useMemo optimization."
    }
  ];

  return (
    <div className="container">
      <h1 className="section-title">My Projects</h1>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;