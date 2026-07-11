import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API = "http://127.0.0.1:8000";

function App() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/tasks`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await axios.post(`${API}/tasks`, {
      title,
      priority,
    });

    setTitle("");
    setPriority("High");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.put(`${API}/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/${id}`);
    fetchTasks();
  };

  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

const sortedTasks = [...tasks].sort((a, b) => {
  const order = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  return order[a.priority] - order[b.priority];
});

  const progress =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  const getPriorityColor = (priority) => {
    if (priority === "High") return "#ef4444";
    if (priority === "Medium") return "#f59e0b";
    return "#22c55e";
  };

  return (
    <div className="app-container">

      <h1>📝 Task Board</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="add-btn" onClick={addTask}>
        Add Task
      </button>

      <div className="stats">
  <h3>Total: {tasks.length}</h3>
  <h3>Completed: {completed}</h3>
  <h3>Pending: {pending}</h3>
</div>

<h3>Progress: {progress}%</h3>

      <div>
        {sortedTasks.map((task) => (
          <div className="task-card" key={task.id}>

            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />

              <span
                className={
                  task.completed
                    ? "task-title completed"
                    : "task-title"
                }
              >
                {task.title}
              </span>

              <span
                className="priority"
                style={{
                  background: getPriorityColor(task.priority),
                  marginLeft: "10px",
                }}
              >
                {task.priority}
              </span>

            </div>

            <button
              className="delete-btn"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default App;