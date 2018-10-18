import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from 'reactstrap';

import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToDoList from './component/todo';

class App extends React.Component {
    render() {
        return (
            <Container>
                <h1 className="mt-3 mb-4 text-center text-secondary">TODO</h1>
                <ToDoList />
            </Container>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));