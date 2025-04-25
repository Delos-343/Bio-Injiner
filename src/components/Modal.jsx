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
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Title
              </legend>
              <input type="text" className="input" placeholder="Input the title here" />
              <legend className="fieldset-legend">
                Publisher
              </legend>
              <input type="text" className="input" placeholder="Write publisher name" />
              <legend className="fieldset-legend">
                Role
              </legend>
              <input type="text" className="input" placeholder="Set your designated role" />
              <legend className="fieldset-legend">
                Status
              </legend>
              <input type="text" className="input" placeholder="Set user's activity status" />
            </fieldset>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <button type="submit" className="btn btn-primary btn-outline my-4">
              { mode === 'edit' ? 'Save' : 'Add Item' }
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Modal