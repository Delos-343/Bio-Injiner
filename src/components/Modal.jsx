import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'                                       
import remarkMath from 'remark-math'                                              
import rehypeKatex from 'rehype-katex'                                            
import 'katex/dist/katex.min.css'      

/**
 * Modal for adding/editing items, now with document upload.
 *
 * Props:
 * - isOpen (boolean): whether the modal is visible
 * - onClose (function): callback to close modal
 * - mode ("edit"|"view"): determines header and button text
 * - onSubmit (function): receives FormData including the file
 */

const Modal = ({ isOpen, onClose, mode, onSubmit }) => {

  const [description, setDescription] = useState('');

  const [previewMode, setPreviewMode] = useState(false);

  useEffect(() => {

    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => { document.body.style.overflow = '' };
    
  }, [isOpen]);

  const modalRoot = document.body;
  
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <>
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
            {mode === 'edit' ? 'Edit Item' : 'View Details'}
          </h3>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              onSubmit(formData)
            }}
            className="flex flex-col space-y-4"
          >
            {/* Title */}
            <div>
              <label htmlFor="title" className="label my-2">
                <span className="label-text">
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
              <label htmlFor="publisher" className="label my-2">
                <span className="label-text">
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

            {/* Description */}
            <div>
              <label htmlFor="description" className="label my-2">
                <span className="label-text">
                  Description
                </span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="textarea textarea-bordered w-full"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Render button */}
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="btn btn-outline border-accent-content mt-2"
            >
              {previewMode ? 'Hide Preview' : 'Render LaTeX'}
            </button>

            {previewMode && (
              <div className="prose whitespace-pre-wrap border rounded p-4 mt-2">
                <ReactMarkdown
                  children={description}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                />
              </div>
            )}

            {/* Document Upload */}
            <div>
              <label htmlFor="document" className="label my-2">
                <span className="label-text">
                  Upload Document (Word, PDF)
                </span>
              </label>
              <input
                id="document"
                name="document"
                type="file"
                accept=".pdf,.doc,.docx"
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Actions */}
            <div className="modal-action justify-center mt-6">
              <button
                type="submit"
                className="btn btn-primary btn-outline"
              >
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
