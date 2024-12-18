import { compareAlternativeData } from "./CompareAlternativesData";

const CompareAlternatives = () => {
  return (
    <div className="lg:mt-[120px]">
      <div>
        <h1 className="text-center font-jakarta text-[48px] font-semibold mb-[60px] text-white">
          Compare Alternatives
        </h1>
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-3">
          {/* postiz */}
          <div className="bg-darkGrey rounded-2xl p-[44px]">
            <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
              Postiz - Compare Alternatives
            </h4>

            <div>
              {compareAlternativeData.map((item) => (
                <div
                  key={item.id}
                  className="text-white text-[22px] font-semibold mb-2"
                >
                  <p>Postiz vs {item.comparison}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Buffer */}
          <div className="bg-darkGrey rounded-2xl p-[44px]">
            <h4 className="font-jakarta text-[34px] font-semibold text-white mb-[40px]">
              Buffer - Compare Alternatives
            </h4>

            <div>
              {compareAlternativeData.map((item) => (
                <div
                  key={item.id}
                  className="text-white text-[22px] font-semibold mb-2"
                >
                  <p>Buffer vs {item.comparison}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareAlternatives;
