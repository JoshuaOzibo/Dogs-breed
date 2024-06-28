import React from "react";

const Pagination = ({ HandlePreviousPage, pageNum, HandleNextPage }) => {
  return (
    <div className="w-full flex items-center justify-center py-2">
      <button className='shadow px-[10px] py-[8px]' onClick={HandlePreviousPage}>Previous Page</button>
      <p className="shadow px-[6px] py-[8px]">Page {pageNum + 1}</p>
      <button className='shadow px-[10px] py-[8px]' onClick={HandleNextPage}>Next Page</button>
    </div>
  );
};

export default Pagination;
