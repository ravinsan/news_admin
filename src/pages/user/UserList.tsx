import { useState } from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Plus, Layout } from 'lucide-react'


const UserList = () => {
  const originalData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    { id: 4, name: "Bob Brown", email: "bob@example.com", status: "Inactive" },
    { id: 5, name: "Charlie White", email: "charlie@example.com", status: "Active" },
  ]

  const [data, setData] = useState(originalData)
  const [search, setSearch] = useState('')
  const [sortField, setSortField] = useState(null)
  const [sortOrder, setSortOrder] = useState("asc")
  const [statusFilter, setStatusFilter] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // **Sorting Logic**
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc"
    setSortField(field)
    setSortOrder(order)

    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1
      if (a[field] > b[field]) return order === "asc" ? 1 : -1
      return 0
    })

    setData(sortedData)
  }

  // **Sorting Icons**
  const getSortIcon = (field) => {
    if (sortField !== field) return <ArrowUpDown className="inline ml-1 h-4 w-4 text-gray-400" />
    return sortOrder === "asc" ? <ArrowUp className="inline ml-1 h-4 w-4 text-black" /> : <ArrowDown className="inline ml-1 h-4 w-4 text-black" />
  }

  // **Filtering Data**
  const filteredData = data
    .filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
    .filter(user => statusFilter === "All" || user.status === statusFilter)

  // **Pagination Logic**
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
        <>
        <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-100 min-h-screen">
        {/* Main Content */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">User List</h2>
            
            {/* Create User Button */}
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              <Plus className="w-5 h-5" />
              Create User
            </button>
          </div>

          {/* Search & Filter */}
          <div className="mb-4 flex gap-4">
            <div className="flex items-center border rounded-lg px-3 py-2 shadow-sm bg-white w-64">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name..."
                className="ml-2 w-full outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <select
              className="border rounded-lg px-3 py-2 shadow-sm bg-white"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-md">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => handleSort("id")}>
                    ID {getSortIcon("id")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => handleSort("name")}>
                    Name {getSortIcon("name")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => handleSort("email")}>
                    Email {getSortIcon("email")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {paginatedData.map(user => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-800">{user.id}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{user.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{user.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-800">{user.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center items-center gap-4">
            <button 
              disabled={currentPage === 1} 
              className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>
            <span className="text-gray-700">{currentPage} / {totalPages}</span>
            <button 
              disabled={currentPage === totalPages} 
              className="px-3 py-2 bg-gray-200 rounded-md disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
          </div>
        </>
  )
}

export default UserList
