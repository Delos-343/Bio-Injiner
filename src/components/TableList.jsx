import React from 'react'

/**
 * A responsive table listing items with title, publisher, truncated description,
 * document link, and actions (edit/delete). Covers full width.
 *
 * Props:
 * - handleOpen: (mode: string, item?: object) => void
 */

const TableList = ({ handleOpen }) => {

  const items = [
    {
      id: 1,
      title: "Project Injiner",
      publisher: "Fachry Dwi Handoko",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      fileName: "",
      fileURL: ""
    },
    {
      id: 2,
      title: "Mathematics 0",
      publisher: "Khalid Barelvi",
      description: "An introductory primer to fundamental mathematical concepts. It typically covers arithmetic operations, the number line, basic algebraic manipulation, and problem-solving strategies designed to prepare learners for more advanced topics in algebra and geometry.",
      fileName: "",
      fileURL: ""
    },
    {
      id: 3,
      title: "Linear Algebra I",
      publisher: "Khalid Barelvi",
      description: "Studies regarding vector spaces and linear mappings between them, encompassing topics such as systems of linear equations, matrix algebra, determinants, and eigenvalues, which form the backbone of modern computational methods.",
      fileName: "",
      fileURL: ""

    },
    {
      id: 4,
      title: "Fourier Transforms",
      publisher: "Khalid Barelvi",
      description: "In mathematics, the Fourier transform is an integral transform that decomposes a time- or space-domain function into its constituent frequencies, yielding a complex-valued function of frequency.",
      fileName: "",
      fileURL: ""
    },
    {
      id: 5,
      title: "Calculus — Differentiation",
      publisher: "Hasi",
      description: "Measures the instantaneous rate of change of a function, representing the slope of the tangent line at a given point and serving as a fundamental tool in physics and optimization.",
      fileName: "",
      fileURL: ""
    },
    {
      id: 6,
      title: "Calculus — Integration",
      publisher: "Hasi",
      description: "Continuous analog of a sum, used to calculate areas under curves, volumes, and other aggregated quantities by accumulating infinitesimal contributions.",
      fileName: "",
      fileURL: ""
    },
    {
      id: 7,
      title: "Linear Algebra II",
      publisher: "Khalid Barelvi",
      description: "Explores inner product spaces, orthogonality, spectral theorems, and canonical forms such as Jordan and singular value decompositions.",
      fileName: "",
      fileURL: ""
    },
  ];

  const truncateWords = (text, maxWords) => {

    const words = text.split(/\s+/);

    if (words.length <= maxWords) return text;

    return words.slice(0, maxWords).join(' ') + '...';
  }

  return (
    <section className="w-full px-4 mt-12">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-base-100/30 border-b-2 border-accent-content/50 font-mono text-gray-300">
                <tr>
                  <th className="px-4 py-2 text-left break-words first:rounded-tl-lg">
                    Title
                  </th>
                  <th className="px-4 py-2 text-left break-words">
                    Publisher
                  </th>
                  <th className="px-4 py-2 text-left break-words">
                    Description
                  </th>
                  <th className="px-4 py-2 text-center">
                    Upload Status
                  </th>
                  <th className="px-4 py-2 text-center last:rounded-tr-lg">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="hover:bg-base-300 text-sm">
                    <td className="px-4 py-3 whitespace-normal break-words min-w-0">
                      <button
                        className="text-blue-600 hover:underline"
                        onClick={() => handleOpen('view', item)}
                        aria-label={`View ${item.title}`}
                      >
                        {item.title}
                      </button>
                    </td>

                    <td className="px-4 py-3 whitespace-normal break-words min-w-0">
                      {item.publisher}
                    </td>

                    <td className="px-4 py-3 whitespace-normal break-words">
                      {truncateWords(item.description, 13)}
                    </td>

                    {/* Document status */}
                    <td className="px-4 py-3 text-center">
                      {item.fileURL ? (
                        <button
                          className="btn btn-sm rounded-full w-8 h-8 btn-primary"
                          aria-label="Document uploaded"
                        >
                          ✓
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm rounded-full w-8 h-8 btn-outline"
                          aria-label="No document uploaded"
                        >
                          ✗
                        </button>
                      )}
                    </td>

                    {/* Edit & Delete */}
                    <td className="px-4 py-3 text-center space-x-2 whitespace-normal">
                      <button
                        onClick={() => handleOpen('edit', item)}
                        className="btn btn-ghost text-green-500"
                        aria-label={`Edit ${item.title}`}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-ghost text-red-600"
                        aria-label={`Delete ${item.title}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TableList;
