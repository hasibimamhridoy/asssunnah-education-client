import React from "react";
import BookedCard from "./BookedCard";
import SectionTitle from "../../../../components/SectionTitile/SectionTitle";
import NotFound from "../../../../components/NotFound/NotFound";
import useIsBookedClassess from "../../../../hooks/useBookedItems";

const BookedItems = () => {


  return (
    <div className="w-full">
      <SectionTitle clrTitle="Booked" subTitle="Class"></SectionTitle>
      <div className="grid grid-cols-1 w-full gap-5 lg:grid-cols-2">
        <BookedCard></BookedCard>
      </div>
    </div>
  );
};

export default BookedItems;
