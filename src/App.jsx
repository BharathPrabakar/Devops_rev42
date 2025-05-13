import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px'
      }}>Task Manager</h1>
      
      <div style={{
        display: 'flex',
        marginBottom: '20px',
        gap: '10px'
      }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Add
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '8px 16px',
            backgroundColor: filter === 'all' ? '#2c3e50' : '#bdc3c7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          style={{
            padding: '8px 16px',
            backgroundColor: filter === 'active' ? '#2c3e50' : '#bdc3c7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          style={{
            padding: '8px 16px',
            backgroundColor: filter === 'completed' ? '#2c3e50' : '#bdc3c7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Completed
        </button>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {filteredTasks.length === 0 ? (
          <p style={{
            textAlign: 'center',
            padding: '20px',
            color: '#7f8c8d'
          }}>No tasks found</p>
        ) : (
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            {filteredTasks.map(task => (
              <li key={task.id} style={{
                padding: '15px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? '#95a5a6' : '#2c3e50',
                    fontSize: '18px'
                  }}>
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '5px 10px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        color: '#7f8c8d'
      }}>
        {tasks.filter(t => !t.completed).length} tasks remaining
      </div>
    </div>
  );
}

export default App;