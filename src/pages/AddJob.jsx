import React from "react";
import { SectionTitle } from "../components";

const AddJob = () => {
  return (
    <>
    <SectionTitle title="Add a Job" path="Home / Dashboard / Add a job" />
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-end gap-x-2 max-sm:px-5 my-20">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Position</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Company</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Job Location</span>
        </label>
        <input type="text" className="input input-bordered w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Status</span>
        </label>
        <select className="select select-bordered">
          <option value="interview">interview</option>
          <option value="declined">declined</option>
          <option value="pending">pending</option>
        </select>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Job Type</span>
        </label>
        <select className="select select-bordered">
          <option value="typeFull">full-time</option>
          <option value="typePart">part-time</option>
          <option value="remote">remote</option>
          <option value="internship">internship</option>
        </select>
      </div>

      <button className="btn btn-error text-white font-bold max-sm:w-full max-sm:my-5">Clear</button>
      <button type="submit" className="btn bg-primary-color text-white font-bold max-sm:w-full">Submit</button>

    </div>
    </>
  );
};

export default AddJob;
