import React, { useEffect, useState } from 'react';
import ConfirmDeleteModal from './dialog/confirmDelete';
import Pagination from './common/Pagination';
import '../css/list.css';

function List(props) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(2);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  })

  const onChangePage = (pageOfItems, totalPages) => {
    setPageIndex(pageOfItems);
    setTotalPages(totalPages);
  }

  const handleKeyDown = (e) => {
    if (hoverIndex !== -1) {
      if (e.keyCode === 38 && hoverIndex > 0) {
        setHoverIndex(hoverIndex - 1)
      } else if (e.keyCode === 40 && hoverIndex < pageSize - 1) {
        setHoverIndex(hoverIndex + 1)
      }
    }
  }

  const startIndex = (pageIndex - 1) * pageSize;
  const endIndex = pageIndex * pageSize;
  const UserDetail = (user, index) => {
    let absoluteIndex = index + (pageIndex - 1) * 2;
    let enable = (index === hoverIndex) && !props.editStatus;
    return (
      <tr
        key={index}
        onMouseOver={() => setHoverIndex(index)}
        onMouseOut={(e) => setHoverIndex(-1)}
      >
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td
          className={enable ? "enable" : ""}
        >
          <button
            type="button"
            className="btn btn-outline-info btn-sm mx-auto"
            onClick={() => props.handleEdit(absoluteIndex)}
          >
            Edit
            </button>
        </td>
        <td
          className={enable ? "enable" : ""}
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
            handleDelete={(indexDelete) => props.handleDelete(indexDelete)}
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
              <th scope="col" style={{ minWidth: 80 + 'px' }}>Edit</th>
              <th scope="col" style={{ minWidth: 90 + 'px' }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.list.slice(startIndex, endIndex).map(UserDetail)}
          </tbody>
        </table>
      </div>
      <Pagination items={props.list} onChangePage={(pageIndex, totalPages) => onChangePage(pageIndex, totalPages)}>
        {
          ({ pager, setPage }) => (
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item  ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" onClick={() => setPage(1)}>First</a>
                </li>
                <li className={`page-item  ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" onClick={() => setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                  <li key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
                    <a className="page-link" onClick={() => setPage(page)}>{page}</a>
                  </li>
                )}
                <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                  <a className="page-link" onClick={() => setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                  <a className="page-link" onClick={() => setPage(pager.totalPages)}>Last</a>
                </li>
              </ul>
            </nav>
          )
        }
      </Pagination>
    </div>
  );
}

export default List;