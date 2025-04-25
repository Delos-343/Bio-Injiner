import React from 'react'

/**
 * A responsive table listing items with title, publisher, truncated description, status, and actions.
 * Covers full width of the viewport with smooth, rounded header styling and accent-colored header line.
 * Ensures cells wrap and are responsive to prevent overlap.
 * Props:
 * - handleOpen: (mode: string, item?: object) => void, callback to open modal in a given mode with optional item data
 */

const TableList = ({ handleOpen }) => {

  const items = [
    { id: 1, title: "Project Injiner", publisher: "Fachry Dwi Handoko", description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.", isActive: false },
    { id: 2, title: "Mathematics 0", publisher: "Khalid Barelvi", description: "An introductory primer to fundamental mathematical concepts. It typically covers arithmetic operations, the number line, basic algebraic manipulation, and problem-solving strategies designed to prepare learners for more advanced topics in algebra and geometry.", isActive: true },
    { id: 3, title: "Linear Algebra I", publisher: "Khalid Barelvi", description: "Studies regarding vector spaces and linear mappings between them, encompassing topics such as systems of linear equations, matrix algebra, determinants, and eigenvalues, which form the backbone of modern computational methods.", isActive: true },
    { id: 4, title: "Fourier Transforms", publisher: "Khalid Barelvi", description: "In mathematics, the Fourier transform is an integral transform that decomposes a time- or space-domain function into its constituent frequencies, yielding a complex-valued function of frequency.", isActive: true },
    { id: 5, title: "Calculus — Differentiation", publisher: "Hasi", description: "Measures the instantaneous rate of change of a function, representing the slope of the tangent line at a given point and serving as a fundamental tool in physics and optimization.", isActive: false },
    { id: 6, title: "Calculus — Integration", publisher: "Hasi", description: "Continuous analog of a sum, used to calculate areas under curves, volumes, and other aggregated quantities by accumulating infinitesimal contributions.", isActive: false },
    { id: 7, title: "Linear Algebra II", publisher: "Khalid Barelvi", description: "Explores inner product spaces, orthogonality, spectral theorems, and canonical forms such as Jordan and singular value decompositions.", isActive: true },
  ];

  // Truncate description to a max number of words
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
              <thead className="bg-base-100/30 border-b-2 border-accent-content/50">
                <tr>
                  <th className="p-4 text-left text-gray-300 break-words first:rounded-tl-lg">
                    Title
                  </th>
                  <th className="p-4 text-left text-gray-300 break-words">
                    Publisher
                  </th>
                  <th className="p-4 text-left text-gray-300 break-words">
                    Description
                  </th>
                  <th className="p-4 text-center text-gray-300">
                    Status
                  </th>
                  <th className="p-4 text-center text-gray-300 last:rounded-tr-lg">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="hover:bg-base-300 text-sm">
                    <td className="px-4 py-3 whitespace-normal break-words min-w-0">
                      <button
                        className="text-blue-300 hover:underline font-light cursor-pointer"
                        onClick={() => handleOpen('view', item)}
                        aria-label={`View details for ${item.title}`}
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
                    <td className="px-4 py-3 text-center">
                      <button
                        className={`btn btn-sm rounded-full w-8 h-8 m-auto whitespace-normal ${
                          item.isActive ? 'btn-primary' : 'btn-outline'
                        }`}
                        aria-label={item.isActive ? 'Active' : 'Inactive'}
                      >
                        {item.isActive ? '✓' : '✗'}
                      </button>
                    </td>
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
  );
}

export default TableList;