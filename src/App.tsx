import React from "react";
import "./App.css";
import rat_img from "./assets/images/brown_rat.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. <br></br>Hello World
            </p>
            <Container>
                <Row>
                    <Col>
                        <h1>Rats</h1>
                        <img src={rat_img} width={600} alt="A brown rat" />
                        <div
                            style={{
                                width: "80px",
                                height: "80px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>List of rats:</p>
                        <ul>
                            <li> Brown rat</li>
                            <li> Black rat</li>
                            <li> Fancy rat</li>
                        </ul>
                        <div
                            style={{
                                width: "80px",
                                height: "80px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "80px",
                                height: "80px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
