const Summary = () => {
  return (
    <div className="lg:mt-[120px]">
      <div>
        <h1 className="text-center font-jakarta text-[48px] font-semibold mb-[60px] text-white">
          Summary
        </h1>

        <div className="max-w-screen-xl mx-auto p-[44px] bg-darkGrey rounded-2xl text-white">
          <h5 className="font-jakarta text-[22px] font-semibold mb-5">
            Which platform is the most affordable?
          </h5>
          <p className="font-dmSans text-[22px] font-light text-[#D1D1D1]">
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
