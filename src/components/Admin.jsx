import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]); // All orders
  const [currentTab, setCurrentTab] = useState("pending"); // Active tab
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [totalOrders, setTotalOrders] = useState(0); // Total number of orders
  const ordersPerPage = 5; // Number of orders per page

  // Fetch orders from the server based on the current tab and page
  useEffect(() => {
    const fetchOrders = async () => {
      console.log("Fetching orders for tab:", currentTab); // Debug currentTab
      try {
        // Ensure proper endpoint selection
        const endpoint =
          currentTab === "pending"
            ? `/api/data/pending?page=${currentPage}&limit=${ordersPerPage}`
            : currentTab === "completed"
            ? `/api/data/completed?page=${currentPage}&limit=${ordersPerPage}`
            : currentTab === "onprocess"
            ? `/api/data/onprocess?page=${currentPage}&limit=${ordersPerPage}`
            : ""; // Default value for safety

        if (!endpoint) {
          console.error("Invalid tab selected");
          return;
        }

        console.log("Endpoint being fetched:", endpoint); // Debug endpoint
        const response = await axios.get(endpoint); // Proxy handles base URL
        console.log("Response data:", response.data); // Debug server response
        setOrders(response.data); // Assuming response data contains 'orders' array
        setTotalOrders(response.data.totalOrders); // Assuming response data contains 'totalOrders'
      } catch (error) {
        console.error("Error fetching orders:", error);
        // Log the error response for debugging
        if (error.response) {
          console.error("Response Error:", error.response);
        }
      }
    };

    fetchOrders();
  }, [currentTab, currentPage]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1); // Reset to first page when changing tab
  };

  // Handle status update
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`/api/data/updatestatus/${id}`, { status: newStatus }); // Proxy handles base URL
      // Refresh orders after update
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // Handle delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/data/delete/${id}`); // Proxy handles base URL
      // Remove deleted order from the state
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage * ordersPerPage < totalOrders) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-manrope">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                currentTab === "pending"
                  ? "bg-red-500 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("pending")}
            >
              Pending Orders
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                currentTab === "onprocess"
                  ? "bg-yellow-500 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("onprocess")}
            >
              On-Process Orders
            </li>
            <li
              className={`cursor-pointer p-3 rounded-lg ${
                currentTab === "completed"
                  ? "bg-green-500 text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("completed")}
            >
              Completed Orders
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">
          <h2 className="text-3xl font-bold mb-6 text-center capitalize">
            {currentTab} Orders
          </h2>
          {Array.isArray(orders) && orders.length > 0 ? (
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-700">
                  <th className="p-4 text-left">Order Number</th>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <React.Fragment key={order._id}>
                    <tr className="border-t border-gray-700">
                      <td
                        className="p-4 cursor-pointer"
                        onClick={() => setExpandedOrderId(order._id)}
                      >
                        {index + 1} {/* Display sequential order number */}
                      </td>
                      <td className="p-4">{order.name}</td>
                      <td className="p-4">{order.email}</td>
                      <td className="p-4 capitalize">{order.status}</td>
                      <td className="p-4 flex space-x-4">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className="bg-gray-700 text-white p-2 rounded-lg focus:outline-none"
                        >
                          <option value="pending">Pending</option>
                          <option value="onprocess">On-Process</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleDelete(order._id)}
                          className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>

                    {/* Additional Order Details */}
                    {expandedOrderId === order._id && (
                      <tr className="bg-gray-700">
                        <td colSpan="5" className="p-4">
                          <div className="bg-gray-600 p-4 rounded-lg">
                            <p><strong>Phone:</strong> {order.phone}</p>
                            <p><strong>Subject:</strong> {order.subject}</p>
                            <p><strong>Message:</strong> {order.message}</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-400">No orders in this section</p>
          )}

          {/* Pagination */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage * ordersPerPage >= totalOrders}
              className="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
