import React from 'react';
import '../../css/list.css';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }


  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    if (this.props.items && this.props.items.length) {
      this.setPage(1);
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(1);
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.setPage(this.state.pager.currentPage - 1);
    } else if (e.keyCode === 39) {
      this.setPage(this.state.pager.currentPage + 1);
    }
  }

  setPage = (page) => {
    var items = this.props.items;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page);

    this.setState({ pager: pager });
    this.props.onChangePage(pager.currentPage, pager.totalPages);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 2;
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return this.props.children({
      pager: pager,
      setPage: this.setPage
    })

    // return (
    //   <nav aria-label="Page navigation example">
    //     <ul className="pagination justify-content-center">
    //       <li className={`page-item  ${pager.currentPage === 1 ? 'disabled' : ''}`}>
    //         <a className="page-link" onClick={() => this.setPage(1)}>First</a>
    //       </li>
    //       <li className={`page-item  ${pager.currentPage === 1 ? 'disabled' : ''}`}>
    //         <a className="page-link" onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
    //       </li>
    //       {pager.pages.map((page, index) =>
    //         <li key={index} className={`page-item ${pager.currentPage === page ? 'active' : ''}`}>
    //           <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
    //         </li>
    //       )}
    //       <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
    //         <a className="page-link" onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
    //       </li>
    //       <li className={`page-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
    //         <a className="page-link" onClick={() => this.setPage(pager.totalPages)}>Last</a>
    //       </li>
    //     </ul>
    //   </nav>
    // );
  }
}

export default Pagination;