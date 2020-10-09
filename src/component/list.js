import React from 'react';
import ConfirmDeleteModal from './dialog/confirmDelete';
import Pagination from './common/Pagination';
import '../css/list.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverIndex: -1,
      pageIndex: 1,
      pageSize: 2,
      totalPages: 0,
    }
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
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

  onChangePage(pageOfItems, totalPages) {
    this.setState({ 
      pageIndex: pageOfItems,
      totalPages: totalPages
    });
  }

  handleKeyDown(e) {
    const { hoverIndex } = this.state;
    if(hoverIndex !== -1) {
      if (e.keyCode === 38 && hoverIndex > 0) {
        this.setState( prevState => ({
          hoverIndex: prevState.hoverIndex - 1,
        }))
      } else if (e.keyCode === 40 && hoverIndex < this.state.pageSize - 1) {
        this.setState( prevState => ({
          hoverIndex: prevState.hoverIndex + 1
        }))
      }
    }
  }

  render() {
    const startIndex = (this.state.pageIndex-1)*this.state.pageSize;
    const endIndex = this.state.pageIndex*this.state.pageSize;
    const UserDetail = (user, index) => {
      let absoluteIndex = index + (this.state.pageIndex-1)*2;
      let enable = (index === this.state.hoverIndex) && !this.props.editStatus;
      return (
        <tr 
          key={index} 
          onMouseOver={(e) => this.handleHover(e, index)}
          onMouseOut={(e) => this.handleHoverOut(e, index)}
        >
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td
            className={enable ? "enable":""}
          >
            <button 
              type="button" 
              className="btn btn-outline-info btn-sm mx-auto"
              onClick={() => this.props.handleEdit(absoluteIndex)}
            >
              Edit
            </button>
          </td>
          <td
            className={enable ? "enable":""}
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
    }
    return (
      <div>
        <div className="list">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col" style={{minWidth: 80 + 'px'}}>Edit</th>
                <th scope="col" style={{minWidth: 90 + 'px'}}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list.slice(startIndex, endIndex).map(UserDetail)}
            </tbody>
          </table>
        </div>
        <Pagination items={this.props.list} onChangePage={(pageIndex, totalPages) => this.onChangePage(pageIndex, totalPages)} />
      </div>
    );  
  }
}

export default List;