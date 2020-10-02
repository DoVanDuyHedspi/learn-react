import React from 'react';
import ConfirmDeleteModal from './dialog/confirmDelete';
import '../css/list.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverIndex: -1,
    }
  }

  handleHover = (e, index) => {
    this.setState({
      hoverIndex: index
    })
  }

  handleHoverOut = (e, index) => {
    this.setState({
      hoverIndex: -1
    })
  } 

  render() {
    const UserDetail = (user, index) => (
      <tr 
        key={index} 
        onMouseOver={(e) => this.handleHover(e, index)}
        onMouseOut={(e) => this.handleHoverOut(e, index)}
      >
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td
          className={index === this.state.hoverIndex && !this.props.editStatus ? "enable":""}
        >
          <button 
            type="button" 
            className="btn btn-outline-info btn-sm mx-auto"
            onClick={() => this.props.handleEdit(index)}
          >
            Edit
          </button>
        </td>
        <td
          className={index === this.state.hoverIndex && !this.props.editStatus ? "enable":""}
        >
          <button 
            type="button" 
            className="btn btn-outline-danger btn-sm mx-auto"
            data-toggle="modal" 
            data-target={`#deleteConfirmModal${index}`}
          >
            Delete
          </button>
          <ConfirmDeleteModal 
            index={index} 
            handleDelete={(indexDelete) => this.props.handleDelete(indexDelete)} 
          />
        </td>
      </tr>
    )
    return (
      <div>
        <div className="list">
          <table className="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col" style={{minWidth: 80 + 'px'}}>Edit</th>
                <th scope="col" style={{minWidth: 90 + 'px'}}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map(UserDetail)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default List;