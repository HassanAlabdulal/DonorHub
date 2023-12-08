import TableWithStripedRows from "./UI/TableWithStripedRowsProps";

export default function BloodDonationsReport() {
  return (
    <main className="bg-[#f7f7f7] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="mb-24">
        <h1 className=" tracking-tight text-center font-roboto text-[#121212] mb-8 text-4xl font-extrabold leading-tight lg:text-5xl ">
          The aggregated amount available for each blood type
        </h1>
      </div>
      <div className="w-2/3">
        <TableWithStripedRows
          headers={["Blood Type", "Available Amount"]}
          rows={[
            { type: "A+", bloodAmount: "Hassan" },
            { type: "A-", bloodAmount: "Ali" },
            { type: "AB+", bloodAmount: "Hussain" },
            { type: "AB-", bloodAmount: "Abdullah" },
            { type: "O+", bloodAmount: "Lutfi" },
            { type: "0-", bloodAmount: "Lutfi" },
          ]}
        />
      </div>
    </main>
  );
}
