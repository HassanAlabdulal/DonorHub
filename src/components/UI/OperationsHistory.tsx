import React from "react";

interface Operation {
  type: string;
  toFrom: string;
  date: string;
}

interface OperationsHistoryProps {
  data: Operation[];
}

const OperationsHistory: React.FC<OperationsHistoryProps> = ({ data }) => {
  return (
    <div className="bg-[#f7f7f7] h-screen w-full justify-center flex flex-col items-center">
      <div className="w-1/2 p-8 m-6 space-y-8 overflow-hidden bg-white rounded-lg shadow-lg ">
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Operations History
        </h1>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2 text-center bg-gray-100 border-b-2 border-gray-200">
                Type
              </th>
              <th className="px-4 py-2 text-center bg-gray-100 border-b-2 border-gray-200">
                To/From
              </th>
              <th className="px-4 py-2 text-center bg-gray-100 border-b-2 border-gray-200">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((operation, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  {operation.type}
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  {operation.toFrom}
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  {operation.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperationsHistory;