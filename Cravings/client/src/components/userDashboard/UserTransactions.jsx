import React, { useEffect, useState } from "react";
import api from "../../config/Api";
import toast from "react-hot-toast";
import Loading from "../Loading";

const UserTransactions = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [orders, setOrders] = useState([]);

  const fetchTransactions = async () => {

    setIsLoading(true);

    console.log("Fetching Transactions...");

    try {

      const res = await api.get("/user/placedorders");

      console.log(res.data.data);

      setOrders(res.data.data);

    } catch (error) {

      console.log(error);

      toast.error(
        error?.response?.data?.message ||
        "Unknown Error"
      );

    } finally {

      setIsLoading(false);

    }
  };

  useEffect(() => {

    fetchTransactions();

  }, []);

  if (isLoading) {
    return (
      <div className="w-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 h-full overflow-y-auto">

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">

        {/* Heading */}
        <div className="mb-4">

          <h2 className="text-2xl font-bold text-gray-800">
            Transactions
          </h2>

          <p className="text-gray-500 mt-1">
            View your payment history
          </p>

        </div>

        <div className="border mt-3"></div>

        {/* Empty */}
        {!orders || orders.length === 0 ? (

          <div className="text-center text-gray-500 py-12">

            <p className="text-lg">
              No transactions found
            </p>

          </div>

        ) : (

          <div className="mt-6 overflow-x-auto">

            <table className="w-full border-collapse">

              <thead>

                <tr className="bg-gray-100 border-b-2 border-gray-300">

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Transaction ID
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Payment Status
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Amount
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Payment Method
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders?.map((order, idx) => (

                  <tr
                    key={idx}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >

                    {/* Transaction ID */}
                    <td className="px-4 py-3 text-gray-800 font-medium">

                      {order?.paymentId ||
                        order?._id?.substring(0, 10)}

                    </td>

                    {/* Status */}
                    <td className="px-4 py-3">

                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold capitalize
                        ${
                          order?.paymentStatus === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >

                        {order?.paymentStatus || "Paid"}

                      </span>

                    </td>

                    {/* Amount */}
                    <td className="px-4 py-3 text-gray-800 font-semibold">

                      ₹{order?.orderValue?.total || 0}

                    </td>

                    {/* Method */}
                    <td className="px-4 py-3 text-gray-600">

                      Razorpay

                    </td>

                    {/* Date */}
                    <td className="px-4 py-3 text-gray-600">

                      {new Date(
                        order?.createdAt
                      ).toLocaleDateString()}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
};

export default UserTransactions;