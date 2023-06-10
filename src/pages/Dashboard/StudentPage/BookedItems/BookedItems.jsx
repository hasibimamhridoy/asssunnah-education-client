import React from "react";
import BookedCard from "./BookedCard";

const BookedItems = () => {
  return (
    <div className="w-full">
      This is a booked items page
      <div className="grid grid-cols-1 w-full gap-5 lg:grid-cols-2">
        <BookedCard></BookedCard>
      </div>
    </div>
  );
};

export default BookedItems;
