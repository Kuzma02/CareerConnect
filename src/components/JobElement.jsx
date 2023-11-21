import { MdLocationOn } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";

const JobElement = () => {
  return (
    <div className="max-w-sm my-5 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Bechtelar-Bednar
        </h5>
        <h6 className="text-xl mb-2">Role: Civil Engineer</h6>
      </a>
      <ul className="text-left">
        <li>
          <MdLocationOn className="text-xl" />
          <p className="text-xl">Kiamba</p>
        </li>
        <li>
          <MdShoppingBag className="text-xl" />
          <p className="text-xl">Internship</p>
        </li>
        <li>
          <MdCalendarMonth className="text-xl" />
          <p className="text-xl">Dec 27th, 2021</p>
        </li>
      </ul>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-2">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order...
      </p>
      <button className="btn bg-primary-color text-white font-bold w-full my-2">Edit</button>
      <button className="btn bg-error text-white font-bold hover:bg-error w-full">Delete</button>
    </div>
  );
};

export default JobElement;
