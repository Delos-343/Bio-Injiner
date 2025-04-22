import React from 'react'

const TableList = () => {

  const items = [
    { id: 1, title: "Project Injiner", publisher: "Fachry Dwi Handoko", role: "Developer", citations: "0", isActive: false },
    { id: 2, title: "Mathematics 0", publisher: "Khalid Barelvi", role: "Author", citations: "7", isActive: true },
    { id: 3, title: "Linear Algebra I", publisher: "Khalid Barelvi", role: "Author", citations: "11", isActive: true },
    { id: 4, title: "Fourier Transforms", publisher: "Khalid Barelvi", role: "Author", citations: "3", isActive: true },
    { id: 5, title: "Calculus — Differentiation", publisher: "Hasi", role: "Co-Author", citations: "4", isActive: false },
    { id: 6, title: "Calculus — Integration", publisher: "Hasi", role: "Co-Author", citations: "3", isActive: false },
    { id: 7, title: "Linear Algebra II", publisher: "Khalid Barelvi", role: "Author", citations: "5", isActive: true },
  ]

  return (
    <>
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Publisher </th>
                        <th> Citation </th>
                        <th> Role </th>
                        <th> Status </th>
                    </tr>
                </thead>
                <tbody className="hover:bg-base-300">
                    {/* row 1 */}
                    {items.map((item) => (
                        <tr className="font-light" key={item.id}>
                            <td>
                                <a className="cursor-pointer"> "{item.title}" </a>
                            </td>
                            <td> {item.publisher} </td>
                            <td> {item.citations} </td>
                            <td> {item.role} </td>
                            <td>
                                <button className={`btn rounded-full w-8 h-8 ${item.isActive ? 'btn-primary' : 'btn-outline'}`}>
                                    { item.isActive ? '✓' : '✗' }
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-ghost text-green-500">
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-ghost text-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default TableList