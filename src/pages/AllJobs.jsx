import React from "react";
import { JobElement, SearchForm, SectionTitle } from "../components";

const AllJobs = () => {
  return (
    <div>
      <SectionTitle title="All Jobs" path="Home / Dashboard / All Jobs" />
      <SearchForm />
      <div className="grid grid-cols-3 max-w-7xl mx-auto lg:gap-x-10 max-lg:grid-cols-2 max-lg:gap-x-0 place-items-center max-md:grid-cols-1">
        <JobElement />
        <JobElement />
        <JobElement />
        <JobElement />
      </div>
    </div>
  );
};

export default AllJobs;
