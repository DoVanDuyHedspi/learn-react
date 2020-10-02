import React from 'react';

function ConfirmDeleteModal(props) {
  return (
    <div className="modal fade" id={`deleteConfirmModal${props.index}`} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Xac nhan</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Ban co chac chan muon xoa nguoi dung nay khong? </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
            <button 
              type="button" 
              className="btn btn-primary" 
              data-dismiss="modal"
              onClick={() => props.handleDelete(props.index)}
            >Yes</button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;