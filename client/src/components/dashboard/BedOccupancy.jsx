function BedOccupancy() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Bed Occupancy
      </h2>

      <div className="space-y-5">

        <div>

          <div className="flex justify-between">

            <span>Occupied</span>

            <span>82%</span>

          </div>

          <div className="bg-gray-200 h-3 rounded-full mt-2">

            <div className="bg-green-500 h-3 rounded-full w-[82%]" />

          </div>

        </div>

        <div>

          <div className="flex justify-between">

            <span>ICU</span>

            <span>64%</span>

          </div>

          <div className="bg-gray-200 h-3 rounded-full mt-2">

            <div className="bg-red-500 h-3 rounded-full w-[64%]" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default BedOccupancy;