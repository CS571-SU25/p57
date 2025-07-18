import React from "react";
import { Col, Card, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function TimerTask( props ) {
  const { text, onDelete, onStart } = props;
  const [finishTime, setFinishTime] = useState("");
  console.log("TimerTask", props);
  return (
    <Col className="mb-3">
      <Card>
        <Card.Body >
            <Card.Text size="sm" style={{          
                width: "14rem",        
                height: "3rem",       
                overflow: "hidden",   
                whiteSpace: "nowrap",}}
            >{text}</Card.Text>
            <Form style={{ marginTop: "0.5rem" , marginBottom: "0.5rem" }}>
              <Form.Group controlId="addTask">
                <Form.Control
                  type="number"
                  placeholder="Estimated Time"
                  value={finishTime}
                  onChange={(e) => setFinishTime(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Button
            variant="primary"
            size="sm"
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem", cursor: "pointer" }}
            onClick={() => {onStart(finishTime); onDelete(text);}}
            >Start
            </Button>
            <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(text)}
            style={{ marginLeft: "0.5rem", marginBottom: "0.5rem", cursor: "pointer" }}
            >
            Delete
            </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}