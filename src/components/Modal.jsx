import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

/**
 * A reusable modal component built with DaisyUI’s controlled-checkbox method.
 *
 * Props:
 * - isOpen (boolean): Whether the modal is shown.
 * - onClose (function): Called when the modal should close.
 * - mode ("edit" | "view"): Determines title and submit button text.
 * - onSubmit (function): Called with form values on submit.
 */

const Modal = ({ isOpen, onClose, mode, onSubmit }) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen]);

  // Portal target
  const modalRoot = document.body;

  // Render nothing if portal target is missing
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      {/* Hidden toggle input controlling open/close */}
      <input
        type="checkbox"
        id="my-modal-toggle"
        className="modal-toggle"
        checked={isOpen}
        onChange={onClose}
      />

      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <div className="modal-box rounded-lg shadow-lg relative">
          {/* Close button */}
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>

          {/* Header */}
          <h3 id="modal-title" className="font-bold text-xl text-center mb-4">
            {mode === 'edit' ? 'Edit Item' : 'Item Details'}
          </h3>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.currentTarget)
              onSubmit(Object.fromEntries(data.entries()))
            }}
            aria-describedby="modal-desc"
          >
            <div className="flex flex-col space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="title" className="label">
                  <span className="label-text my-2">
                    Title
                  </span>
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Publisher */}
              <div>
                <label htmlFor="publisher" className="label">
                  <span className="label-text my-2">
                    Publisher
                  </span>
                </label>
                <input
                  id="publisher"
                  name="publisher"
                  type="text"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Description (multiline) */}
              <div>
                <label htmlFor="description" className="label">
                  <span className="label-text my-2">
                    Description
                  </span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="textarea textarea-bordered w-full"
                />
              </div>

              {/* Status selector */}
              <div>
                <label htmlFor="status" className="label">
                  <span className="label-text my-2">
                    Status
                  </span>
                </label>
                <select
                  id="status"
                  name="status"
                  className="select select-bordered w-full"
                  defaultValue={mode === 'edit' ? undefined : 'inactive'}
                >
                  <option value="active">
                    Active
                  </option>
                  <option value="inactive">
                    Inactive
                  </option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="modal-action justify-center mt-6">
              <button type="submit" className="btn btn-primary btn-outline">
                {mode === 'edit' ? 'Save' : 'Add Item'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;
