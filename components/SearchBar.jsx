"use client";
import React from "react";
import { searchBooks } from "../data/booksAPI";
import { img } from "../data/img.jpg";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import PopularBooks from "./PopularBooks";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = async () => {
    try {
      const data = await searchBooks(query);
      setBooks(data.items);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.trim() === "") {
      setShowSearchResults(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for books"
          className="bg-slate-100 w-72 pl-7 p-3 rounded-l-full text-lg outline-none"
        />
        <button
          onClick={handleSearch}
          className="flex justify-center outline-none items-center w-16 left-0 bg-slate-100 rounded-r-full"
        >
          <CiSearch size={30} color="grey" />
        </button>
      </div>

      {!showSearchResults && <PopularBooks />}

      {showSearchResults && (
        <div className="sm:grid flex flex-col lg:grid-cols-3 md:grid-cols-2 gap-6 pt-5 ">
          {books.map((book) => (
            <div key={book.id} className="flex shadow-lg rounded-3xl">
              {book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail ? (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="min-w-20 min-h-20 flex-shrink-0 rounded-l-3xl"
                />
              ) : (
                <img
                  src={img}
                  alt={book.volumeInfo.title}
                  className="min-w-20 min-h-20 flex-shrink-0 object-cover"
                />
              )}

              <div className="p-4 flex flex-col gap-7">
                <h2 className="font-bold text-xl font-sans">
                  {book.volumeInfo.title}
                </h2>
                <div className="flex flex-col text-sm">
                  {book.volumeInfo.authors && (
                    <p>
                      <span className="font-semibold">Author:</span>{" "}
                      {book.volumeInfo.authors.join(", ")}
                    </p>
                  )}
                  {book.volumeInfo.publishedDate && (
                    <p>
                      <span className="font-semibold">Published Date:</span>{" "}
                      {book.volumeInfo.publishedDate}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
