import { sampleBooks } from "@/data/sampleBooks";
import React from "react";

const PopularBooks = () => {
  return (
    <div className="flex flex-col gap-3 ml-8">
      <h1 className=" text-2xl font-Poppins font-bold">Popular Books</h1>
      <div
        className="flex gap-6 overflow-x-auto "
        style={{ scrollbarWidth: "none", WebkitScrollbarWidth: "none" }}
      >
        {sampleBooks.map((book) => (
          <div key={book.id} className="flex flex-col gap-2">
            {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  style={{ maxWidth: "300px", maxHeight: "250px" }}
                  className="border border-black"
                />
              )}
            <div className="flex flex-col gap-2">
              <h2 className="font-Poppins font-semibold text-xl line-clamp-2">
                {book.volumeInfo.title}
              </h2>
              <div className="flex flex-col gap-2 flex-nowrap">
                {book.volumeInfo.authors && (
                  <p className="font-Poppins text-lg font-normal text-gray-500">
                    {book.volumeInfo.authors.join(", ")}
                  </p>
                )}
                {book.volumeInfo.publishedDate && (
                  <p className=" hidden md:block">
                    Published Date: {book.volumeInfo.publishedDate}
                  </p>
                )}
                {book.volumeInfo.categories && (
                  <p className=" hidden md:block">
                    Genre: {book.volumeInfo.categories.join(", ")}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBooks;
