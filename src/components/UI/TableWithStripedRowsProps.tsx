import { Card, Typography } from "@material-tailwind/react";

// Define the structure of the props
interface TableWithStripedRowsProps {
  headers: string[];
  rows: Array<{ name: string; job: string; date: string }>;
}

// Modify the component to accept props
export default function TableWithStripedRows({
  headers,
  rows,
}: TableWithStripedRowsProps) {
  return (
    <Card className="w-full h-full overflow-scroll">
      <table className="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {header}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ name, job, date }) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {job}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {date}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
