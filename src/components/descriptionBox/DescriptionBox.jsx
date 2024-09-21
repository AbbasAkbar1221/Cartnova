import React from "react";

const DescriptionBox = () => {
  return (
    <>
      <div className=" m-6 ">
        <div className="flex mb-4">
          <button className="text-lg text-white py-2 px-4 bg-blue-900 hover:bg-blue-950 rounded-md mr-4">
            Description
          </button>
          <button className="text-lg text-white py-2 px-4 bg-gray-800 hover:bg-gray-900 rounded-md">
            Review
          </button>
        </div>
        <div className="shadow-xl p-6">
            <p className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ex, iusto quis incidunt fuga consectetur architecto, cupiditate voluptate, blanditiis commodi id maxime mollitia voluptatibus aut eligendi fugiat inventore? Ullam ex porro deserunt libero numquam consectetur, eos sint delectus suscipit quibusdam repellendus soluta laborum hic, velit eligendi eaque. Voluptatum, quasi labore id eveniet incidunt eaque ipsam molestiae ratione quae optio laboriosam nostrum illo sed beatae in. Id soluta accusamus quaerat sint perferendis maxime, molestiae impedit blanditiis deleniti nemo velit, natus corporis libero, mollitia dignissimos molestias rerum eligendi. Nobis iste voluptates praesentium commodi totam alias tempore deserunt, id nesciunt consectetur fuga labore!</p>
        </div>
      </div>
    </>
  );
};

export default DescriptionBox;
