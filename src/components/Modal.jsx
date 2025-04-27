import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { TrashIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

const Modal = ({ isOpen, onClose, mode, onSubmit }) => {

  const [title, setTitle] = useState('');

  const [publisher, setPublisher] = useState('');

  const [description, setDescription] = useState('');

  const [previewMode, setPreviewMode] = useState(false);

  const fileInputRef = useRef(null);                 // ref for file input :contentReference[oaicite:7]{index=7}

  useEffect(() => {

    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => { document.body.style.overflow = '' };

  }, [isOpen]);

  // Portal target
  if (!document.body) return null;

  return ReactDOM.createPortal(
    <>
      <input
        type="checkbox"
        id="modal-toggle"
        className="modal-toggle"
        checked={isOpen}
        onChange={onClose}
      />
      <div className="modal" role="dialog" aria-modal="true">
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
          <h3 className="font-bold text-xl text-center mb-4">
            {mode === 'edit' ? 'Edit Item' : 'Item Details'}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>

            {/* Description + LaTeX Preview */}
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
            <button
              type="button"
              onClick={() => setPreviewMode(!previewMode)}
              className="btn btn-outline mt-2"
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

            {/* Document Upload w. Delete */}
            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <label htmlFor="document" className="label my-2">
                  <span className="label-text">
                    Upload Document (Word / PDF)
                  </span>
                </label>
                <input
                  ref={fileInputRef}                              
                  id="document"
                  name="document"
                  type="file"
                  accept=".pdf,.doc,.docx"                          
                  className="file-input file-input-bordered w-full"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.value = null        // clear file input :contentReference[oaicite:8]{index=8}
                  }
                }}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Remove uploaded document"
              >
                <TrashIcon className="h-5 w-5 text-red-500" />
              </button>
            </div>

            {/* Actions */}
            <div className="modal-action justify-center mt-6 space-x-2">
              <button
                type="submit"
                className="btn btn-primary btn-outline"
              >
                {mode === 'edit' ? 'Save' : 'Add Item'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="btn btn-error btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.body
  );
}

export default Modal;