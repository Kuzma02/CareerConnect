import JobHuntSvg from "/src/assets/images/job hunt landing.svg";

const Landing = () => {
  return (
    <div className="flex justify-center items-center p-24 max-xl:flex-col-reverse max-xl:text-center max-xl:gap-y-10 max-xl:p-0 max-xl:pt-10 max-sm:pt-24">
      <div className="mr-24 max-xl:mr-0">
        <h2 className="text-6xl mb-5 text-base-content max-md:text-4xl max-sm:text-2xl">Welcome to CareerConnect</h2>
        <p className="xl:max-w-xl text-xl text-base-content max-xl:px-24 max-sm:px-10 max-sm:text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, deleniti libero, expedita quaerat culpa repellendus architecto at placeat, odit veniam dolore dolorem ab eum doloribus officiis ea provident excepturi minus!</p>
        <button className="cta-home-button btn bg-primary-color text-white font-bold text-xl mt-5">Login / Register</button>
      </div>
      <div>
        <img src={JobHuntSvg} alt="" className="main-img max-sm:w-52" />
      </div>
    </div>
  )
}

export default Landing