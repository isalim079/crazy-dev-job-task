/* eslint-disable react/no-unescaped-entities */
import doodle2 from "../../../assets/img/doodle2.png";

const FrequentlyAskQues = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-[180px]">
      <div className="grid grid-cols-7 ">
        {/* column 1 */}
        <div className="col-span-2 flex flex-col">
          <h1 className="font-jakarta text-[48px] font-semibold text-white leading-tight mb-2">
            Frequently asked questions
          </h1>
          <img className="w-[60%]" src={doodle2} alt="" />
        </div>

        {/* column 2 */}
        <div className="col-span-5 text-white bg-darkGrey p-6 rounded-md">
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How easy is it to switch from Buffer to Postiz?
            </div>
            <div className="collapse-content">
              <p>
                Very easy, and only takes minutes. Our social set setup is quick
                & easy so you'll be up and running in no time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I use Postiz & Buffer at the same time safely?
            </div>
            <div className="collapse-content">
              <p>
                Very easy, and only takes minutes. Our social set setup is quick
                & easy so you'll be up and running in no time.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              I'm paying for Buffer, but don't want to pay double while I get
              setup - can I get a extended trial?
            </div>
            <div className="collapse-content">
              <p>
                Very easy, and only takes minutes. Our social set setup is quick
                & easy so you'll be up and running in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskQues;
