import React from "react";

export default function Pagination({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2'>

      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a key={number}
                onClick={() => {
                  paginate(number);
                }}
                href='#/'
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
                >
                {number}
                </a>
            ))}
          </li>
        </ul>
      </nav>
      {/* <div>
        <p className='text-sm text-gray-700 py-2'>
          Showing
          <span className='font-medium'> {currentPage * booksPerPage} </span>
          of
          <span className='font-medium'> {totalBooks} </span>
          results
        </p>
      </div> */}
    </div>
  );
}