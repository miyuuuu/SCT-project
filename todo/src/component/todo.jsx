import React from 'react';

import { Form, Input } from 'reactstrap';

const url = 'http://localhost:3000/todos/'

export default class ToDoList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
		this.addRow = this.addRow.bind(this);
		this.deleteRow = this.deleteRow.bind(this);
		this.fetchList = this.fetchList.bind(this);
		this.changeFlag = this.changeFlag.bind(this);
	}
	
	componentDidMount() {
		this.fetchList();
	}

	addRow(todoTitle, todoFlag ) {
		const json = { todoTitle, todoFlag };
		fetch(url, {
			body: JSON.stringify(json), method: 'POST',
			headers: {
				'Content-Type' : 'application/json'
			}
		}).then(this.fetchList);
	}

	deleteRow(id) {
		const targetUrl = url + id;
		fetch(targetUrl, { method: 'DELETE' }).then(this.fetchList);
	}

	fetchList() {
		fetch(url).then((res) => {
			return res.json();
		}).then((todos) => {
			this.setState({ todos: todos });
		});
	}

	changeFlag(id, todoTitle, todoFlag) {
		const json = { id, todoTitle, todoFlag }
		const changeFlag = url +id;
		fetch(url).then((res) => {
			return res.json();
		}).then(() =>
			fetch(changeFlag, {
				body: JSON.stringify(json), method: 'PUT',
				headers: {
					'Content-Type': 'applocation/json'
				}
			}).then(this.fetchList)
		);
	}

	render() {
		return (
			<div>
				<ListInputForm addRow={this.addRow} />
				{this.state.todos.map((row, index) => {
					const { id, todoTitle, todoFlag } = row;
					return <AddList key={index} id={id} todoTitle={todoTitle} todoFlag={todoFlag} deleteRow={this.deleteRow} changeFlag={this.changeFlag} />;
				})}
			</div>
		);
	}
}

class AddList extends React.Component {

	render() {
	return (
			<li className="list-group-item">
				<div className="row">
				<div className="col-2">
					<button className="btn btn-link " type="button" onClick={ ()=> { this.props.changeFlag(this.props.id, this.props.todoTitle, this.props.todoFlag ? false : true); }}>
						{ this.props.todoFlag ? <img className="w-25" src="http://localhost:8080/img/circle.svg"></img> : <img className="w-25" src="http://localhost:8080/img/circle_check.svg"></img>}		
					</button>					
				</div>
				<div className="col-8">
					{ this.props.todoFlag ? <a>{this.props.todoTitle}</a> : <s className='text-muted'>{this.props.todoTitle}</s> }
				</div>
					<div className="col-2 text-right">
						<button  className="btn btn-link" type="button" onClick={() => { this.props.deleteRow(this.props.id);}}>
							<img className="w-25" src="http://localhost:8080/img/trash.svg"></img>
						</button>
					</div>
				</div>
			</li>	
		);
	}	
}

class ListInputForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			todoTitle: '',
			todoFlag: true
		};	
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		const { todoTitle, todoFlag } = this.state;
		this.props.addRow(todoTitle, todoFlag);
		this.setState({ todoTitle: '', todoFlag: true });
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Input required id="todoTitleInput" name="todoTitle" type="text"  onChange={this.handleInputChange} value={this.state.todoTitle} placeholder="ToDoを追加"  />
				</Form>
			</div>
		);
	}
}


