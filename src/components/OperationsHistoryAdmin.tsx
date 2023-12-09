import OperationsHistory from "./UI/OperationsHistory";

const sampleDataFromBackend = [
  { type: "Donate", toFrom: "Ali Alabdulal", date: "22/11/2023" },
  { type: "Donate", toFrom: "Hassan Alabdulal", date: "02/09/2021" },
  { type: "Recipient", toFrom: "Abdullah Al Matawah", date: "17/12/2020" },
  { type: "Recipient", toFrom: "Abdullah Al Matawah", date: "17/12/2020" },
  { type: "Recipient", toFrom: "Abdullah Al Matawah", date: "17/12/2020" },
  { type: "Recipient", toFrom: "Abdullah Al Matawah", date: "17/12/2020" },
  { type: "Recipient", toFrom: "Abdullah Al Matawah", date: "17/12/2020" },
  { type: "Recipient", toFrom: "Abdullah Al Matawah", date: "17/12/2020" },
];

export default function OperationsHistoryAdmin() {
  return (
    <div className="flex items-start w-full -mb-56 h-1/2">
      <OperationsHistory data={sampleDataFromBackend} />
    </div>
  );
}
