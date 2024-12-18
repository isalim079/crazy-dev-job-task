const Summary = () => {
  return (
    <div className="lg:mt-[120px] mt-[60px] px-6 lg:px-0">
      <div>
        <h1 className="text-center font-jakarta text-[32px] lg:text-[48px] font-semibold mb-[40px] lg:mb-[60px] text-white">
          Summary
        </h1>

        <div className="max-w-screen-xl mx-auto p-6 lg:p-[44px] bg-darkGrey rounded-2xl text-white">
          <h5 className="font-jakarta text-[18px] lg:text-[22px] font-semibold mb-5">
            Which platform is the most affordable?
          </h5>
          <p className="font-dmSans text-[18px] lg:text-[22px] font-light text-[#D1D1D1]">
            The most affordable plan is the Standart plan from Postiz. It starts
            from $29 per month, and includes 1 social set (which includes 1
            social profiles), and 1 users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
