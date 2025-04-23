import React from 'react'

const Modal = ({ isOpen, onClose, mode, onSubmit }) => {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className="font-bold text-xl py-4 px-2">
            { mode === 'edit' ? 'Edit Item' : 'Item Details' }
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button className="btn btn-success btn-ghost">
              { mode === 'edit' ? 'Save' : 'Add Item' }
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Modal