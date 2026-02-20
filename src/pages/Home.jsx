function Home() {
  return (
    <div className="container">

      {/* Hero Section */}
      <div className="hero">
        <h1>React State Management Dashboard</h1>
        <p>
          A modern multi-page application demonstrating Context API,
          useReducer, and performance optimization using useMemo.
        </p>
        <button className="btn">Explore Features</button>
      </div>

      {/* Feature Cards */}
      <div className="grid">
        <div className="card">
          <h3>🌍 Global State with Context</h3>
          <p>
            Manage application-wide state like theme and tasks
            without prop drilling.
          </p>
        </div>

        <div className="card">
          <h3>⚙ Structured Updates with useReducer</h3>
          <p>
            Efficiently handle complex state transitions
            with multiple actions.
          </p>
        </div>

        <div className="card">
          <h3>🚀 Optimized Performance</h3>
          <p>
            Prevent unnecessary recalculations using useMemo
            for derived data.
          </p>
        </div>

        <div className="card">
          <h3>📱 Responsive Design</h3>
          <p>
            Fully responsive layout with modern UI and smooth
            animations for better user experience.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;