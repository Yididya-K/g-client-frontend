
"use client";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

type Message = {
  id: number;
  sender: string;
  subject: string;
  date: string;
  status: "Read" | "Unread";
  content: string;
};

const messages: Message[] = [
  
];

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      {messages.length === 0 ? (
        <div className="bg-white shadow rounded-lg p-6 text-center text-gray-600">
          No messages to show.
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-xs leading-normal">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Sender</th>
              <th className="py-3 px-6 text-left">Subject</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, index) => (
              <tr
                key={msg.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-6">{msg.id}</td>
                <td className="py-3 px-6">{msg.sender}</td>
                <td className="py-3 px-6">{msg.subject}</td>
                <td className="py-3 px-6">{msg.date}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      msg.status === "Read"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {msg.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-right">
                  <button
                    onClick={() => setSelectedMessage(msg)}
                    className="text-gray-600 hover:text-black"
                    title="View message"
                  >
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
      

      {/* Modal for message details */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-[#0b0a0a38] bg-opacity-80 flex items-start justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative mt-20">
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-lg"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-2">{selectedMessage.subject}</h3>
            <p className="text-sm text-gray-500 mb-1">
              <strong>From:</strong> {selectedMessage.sender}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Date:</strong> {selectedMessage.date}
            </p>
            <div className="text-gray-800 text-sm">{selectedMessage.content}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
