import React from 'react';
import '../css/body.css';
import List from './list.js';
import Detail from './detail.js';


class Body extends React.Component {
  constructor(props) {
    super(props);

    const listDefault = [
      { 'name': 'duy', 'email': 'duy@gmail.com' },
      { 'name': 'dung', 'email': 'dung@gmail.com' },
      { 'name': 'duy1', 'email': 'duy1@gmail.com' },
      { 'name': 'dung1', 'email': 'dung1@gmail.com' },
      { 'name': 'duy2', 'email': 'duy2@gmail.com' },
      { 'name': 'dung2', 'email': 'dung2@gmail.com' },
    ];
    if(!localStorage.getItem('list')) {
      localStorage.setItem('list', JSON.stringify(listDefault));
    }
    const list = localStorage.getItem('list') ? JSON.parse(localStorage.getItem("list") || "[]") : listDefault;
    
    this.state = {
      list: list,
      editStatus: false,
      editUser: '',
      editIndex: '',
    }
  }

  handleEdit(index) {
    this.setState({
      editStatus: true,
      editUser: this.state.list[index],
      editIndex: index,
    })
  }

  updateLocalStorage = () => {
    localStorage.setItem('list', JSON.stringify(this.state.list));
  }

  handleCancel() {
    this.setState({
      editStatus: false,
      editUser: '',
      editIndex: '',
    })
  }

  async handleUpdate(user) {
    let list = [...this.state.list];
    const index = this.state.editIndex;
    list[index] = user;
    await this.setState({
      list: list,
      editStatus: false,
      editUser: '',
      editIndex: ''
    })

    this.updateLocalStorage()
  }

  async handleDelete(index) {
    console.log(index);
    let list = [...this.state.list];
    list.splice(index, 1);
    await this.setState({
      list: list,
    })

    this.updateLocalStorage();
  }

  render() {
    return (
      <div className="body row m-0">
        <div className="col-md list">
          <List
            list={this.state.list}
            handleEdit={(index) => this.handleEdit(index)}
            editStatus={this.state.editStatus}
            handleDelete={(index) => this.handleDelete(index)}
          />
        </div>
        <div className="col-md detail">
          <Detail
            editStatus={this.state.editStatus}
            user={this.state.editUser}
            handleCancel={() => this.handleCancel()}
            handleUpdate={(user) => this.handleUpdate(user)}
          />
        </div>
      </div>
    );
  }
}

export default Body;