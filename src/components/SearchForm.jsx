import React from "react";

const SearchForm = () => {
  return (
    <form action="" className="flex flex-1 w-3/4 mx-auto flex-wrap gap-x-5 items-center justify-center my-10">
      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Search jobs</span>
  </label>
  <input type="search" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
</div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
        </label>
        <select className="select select-bordered" name="jobStatus">
          <option value="allStatus">all</option>
          <option value="interview">interview</option>
          <option value="declined">declined</option>
          <option value="pending">pending</option>
        </select>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
        </label>
        <select className="select select-bordered" name="jobType">
          <option value="typeAll">all</option>
          <option value="fulltime">full time</option>
          <option value="parttime">part time</option>
          <option value="remote">remote</option>
          <option value="internship">internship</option>
        </select>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Pick the best fantasy franchise</span>
        </label>
        <select className="select select-bordered" name="jobOrder">
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
          <option value="az">a-z</option>
          <option value="za">z-a</option>
        </select>
      </div>

      <button type="submit" className="btn bg-primary-color text-white font-bold mt-8">Clear All Filters</button>
    </form>
  );
};

export default SearchForm;
