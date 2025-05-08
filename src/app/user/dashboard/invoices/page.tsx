// components/PastInvoices.tsx
import { FaEye } from "react-icons/fa";

type Invoice = {
  id: number;
  date: string;
  amount: number;
  status: string;
};

const invoices: Invoice[] = [
  { id: 1, date: "2025-03-15", amount: 350.0, status: "Paid" },
  { id: 2, date: "2025-03-15", amount: 350.0, status: "Paid" },
  { id: 3, date: "2025-03-15", amount: 350.0, status: "Paid" },
];

const Invoices = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Past Invoices</h2>
      <div className="bg-white shadow-xl rounded-lg overflow-x-auto p-5 pb-20">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b  border-b-gray-200 text-left text-sm text-gray-900">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className=" hover:bg-gray-50">
                <td className="py-3 px-4">{invoice.id}</td>
                <td className="py-3 px-4">{invoice.date}</td>
                <td className="py-3 px-4">${invoice.amount.toFixed(2)}</td>
                <td className="py-3 px-4">{invoice.status}</td>
                <td className="py-3 px-4">
                  <button className="text-gray-700 hover:text-black">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
