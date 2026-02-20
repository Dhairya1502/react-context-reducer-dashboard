import { useContext, useState, useMemo } from "react";
import { AppContext } from "../context/AppContext";

function Analytics() {
  const { state, dispatch } = useContext(AppContext);
  const [input, setInput] = useState("");

  // Memoized completed tasks count
  const completedTasks = useMemo(() => {
    return state.tasks.filter((task) => task.completed).length;
  }, [state.tasks]);

  // Memoized completion percentage
  const completionPercentage = useMemo(() => {
    if (state.tasks.length === 0) return 0;
    return Math.round((completedTasks / state.tasks.length) * 100);
  }, [completedTasks, state.tasks.length]);

  const addTask = () => {
    if (input.trim() === "") return;

    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  return (
    <div className="container">
      <h1 className="section-title">Task Analytics Dashboard</h1>

      {/* Add Task Section */}
      <div
        style={{
          marginBottom: "30px",
          display: "flex",
          gap: "12px",
          alignItems: "center"
        }}
      >
        <input
          type="text"
          placeholder="Enter new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Summary Card */}
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3>Total Tasks: {state.tasks.length}</h3>
        <h3>Completed Tasks: {completedTasks}</h3>
        <h3>Progress: {completionPercentage}%</h3>

        {/* Progress Bar */}
        <div
          style={{
            height: "12px",
            background: "#e5e7eb",
            borderRadius: "10px",
            marginTop: "10px",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              width: `${completionPercentage}%`,
              height: "100%",
              background: "#16a34a",
              transition: "0.3s ease"
            }}
          ></div>
        </div>
      </div>

      {/* Task List */}
      <div className="grid">
        {state.tasks.length === 0 && (
          <div className="card">
            <p>No tasks added yet. Start by adding one above 🚀</p>
          </div>
        )}

        {state.tasks.map((task) => (
          <div className="card" key={task.id}>
            <p
              className={task.completed ? "completed-text" : ""}
              style={{ fontWeight: "500" }}
            >
              {task.text}
            </p>

            <div className="task-actions">
              <button
                className="btn btn-complete"
                onClick={() =>
                  dispatch({ type: "TOGGLE_TASK", payload: task.id })
                }
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button
                className="btn btn-delete"
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: task.id })
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;