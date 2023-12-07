export default function Reports() {
  // Define a common card class for reuse
  const cardClass =
    "block w-full h-full p-8 bg-white hover:bg-gray-100 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-xl hover:border-gray-400 transition duration-300";

  return (
    <section className="flex items-center justify-center w-full h-screen px-4 bg-[#f7f7f7] md:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="min-w-[16rem] min-h-[24rem]">
          <a href="#" className={cardClass}>
            <h5 className="mb-2 text-xl font-semibold text-gray-700">
              List of all blood donations
            </h5>
            <p className="text-gray-500">
              A detailed report on blood donations and statistics.
            </p>
          </a>
        </div>
        <div className="min-w-[20rem] min-h-[24rem]">
          <a href="#" className={cardClass}>
            <h5 className="mb-2 text-xl font-semibold text-gray-700">
              List of all blood donations
            </h5>
            <p className="text-gray-500">
              A detailed report on blood donations and statistics.
            </p>
          </a>
        </div>
        <div className="min-w-[20rem] min-h-[24rem]">
          <a href="#" className={cardClass}>
            <h5 className="mb-2 text-xl font-semibold text-gray-700">
              List of all blood donations
            </h5>
            <p className="text-gray-500">
              A detailed report on blood donations and statistics.
            </p>
          </a>
        </div>
        <div className="min-w-[20rem] min-h-[24rem]">
          <a href="#" className={cardClass}>
            <h5 className="mb-2 text-xl font-semibold text-gray-700">
              List of all blood donations
            </h5>
            <p className="text-gray-500">
              A detailed report on blood donations and statistics.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
