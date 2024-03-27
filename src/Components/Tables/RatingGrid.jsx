import React from "react";

const RatingGrid = ({ attribute }) => {
  return (
    <div>
      <>
        <div className="text-2xl underline text-green-900 font-sans mb-2">
          Attributes
        </div>
        <div className="flex justify-evenly bg-white p-2">
          <div className="w-1/2">Attribute</div>
          <div className="w-1/2">Ratings</div>
        </div>
        <div className="pe-4 pt-8 pb-8">
          <table className="w-full bg-white">
            <tbody>
              {Object.entries(attribute)
                .filter(([key, value]) => value > 0)
                .map(([key, value]) => (
                  <tr key={key} className="bg-white p-2">
                    <td className="w-1/2">{key}</td>
                    <td className="w-1/2">{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default RatingGrid;
