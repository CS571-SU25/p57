import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row, Pagination, Card} from "react-bootstrap";
import TimerTask from './components/timerTask';
import TimerCountdown from './components/TimerCountdown.jsx';
import TimerProgressVisual from './components/TimerProgressVisual.jsx';

function App() {
  const today = new Date();
  const [date, setDate] = useState(today.toLocaleDateString());
  const [tasks, setTasks] = useState([]);
  const [aTask, setATask] = useState("");
  const [displayTimer, setDisplayTimer] = useState(false);
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    setCountdown(time);
  }, [time]);

  console.log(aTask)
  console.log(tasks)
  const taskEmpty = tasks.length === 0 ? true : false;

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task != taskToDelete));
  };

  const handleStartTask = (estimateTime) => {
    if (estimateTime > 0) {
      alert("Task already started. Let's finish it!");
      setDisplayTimer(true); 
      setTime(estimateTime * 60); 
    } else if (estimateTime <= 0) {
      alert("Please enter a time!");
    }
  };

  return <div className="centered-card-container">
    <Container
      fluid
      className="justify-content-center align-items-center text-center"
    >
      <h1 className="mb-4">Today is {date}</h1>

      <Card className="mx-auto" style={{ maxWidth: "24rem" }}>
        <Card.Body>
          <Card.Title>To-Do List</Card.Title>
          {taskEmpty ? (
            <>
              <Card.Text>No tasks for today!</Card.Text>
              <Card.Text>Enjoy the rest of your day</Card.Text>
            </>
          ) : (
            <>
              <Card.Text>You have the following tasks for today:</Card.Text>
              <Container fluid>
                <Row>
                  {tasks.map((task, idx) => (
                    <TimerTask
                      key={idx}
                      text={task}
                      onDelete={handleDeleteTask}
                      onStart={handleStartTask}
                    />
                    ))}
                  </Row>
                </Container>
            </>
          )}
        </Card.Body>
      </Card>
      <Form style={{ marginTop: "0.5rem" }}>
        <Form.Group controlId="addTask">
          <Form.Control
            type="text"
            placeholder="Enter task"
            value={aTask}
            onChange={(e) => setATask(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button style={{ marginTop: "0.5rem" }} variant="primary" onClick={() => {
        if (aTask.trim() !== "") {
          setTasks([...tasks, aTask]);
          setATask("");
        }
      }}>Add Task</Button>

    </Container>
    <Container >
      {displayTimer && (
        <TimerCountdown time={time} onComplete={() => setDisplayTimer(false)} />
      )}
    </Container>
    <>
    {displayTimer && (
      <TimerProgressVisual time={time} />
    )}
    </>
  </div>
}

export default App
