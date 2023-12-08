import { Card, Typography } from "@material-tailwind/react";

interface TableWithStripedRowsProps {
  headers: string[];
  rows: Array<{ ID: string; Name: string; ReceivedDate: string }>;
}

export default function TableWithStripedRows({
  headers,
  rows,
}: TableWithStripedRowsProps) {
  return (
    <Card className="w-full h-full overflow-scroll">
      <table className="w-full text-center table-auto min-w-max">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="p-4 bg-black border-b border-blue-gray-100"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-bold leading-none "
                >
                  {header}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ ID, Name, ReceivedDate }) => (
            <tr key={ID} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {ID}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {Name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {ReceivedDate}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
