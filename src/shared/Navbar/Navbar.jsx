import { MdChevronRight } from "react-icons/md";
import logo from "../../assets/img/logo.png";
import logoTxt from "../../assets/img/logoTxt.png";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between font-jakarta lg:px-0 px-6">
        {/* Left section */}
        <div className="flex items-center gap-3">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <img src={logoTxt} alt="" />
          </div>
        </div>

        {/* Middle section */}
        <div className="lg:block hidden">
          <ul className="flex items-center text-white gap-10">
            <li>Features</li>
            <li>
              <select name="" className="bg-black" id="">
                <option value="">Providers</option>
                <option value="">Providers 1</option>
                <option value="">Providers 2</option>
                <option value="">Providers 3</option>
              </select>
            </li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="lg:flex items-center gap-3  hidden">
          <div className="">
            <button className="border border-white text-white rounded-full px-4 py-2">
              Log In
            </button>
          </div>
          <div>
            <button className="bg-white px-4 py-2 rounded-full flex items-center gap-1">
              Get Started{" "}
              <span className="flex items-center text-lg">
                <MdChevronRight /> <MdChevronRight className="-ml-3" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile section */}
        <div className="relative lg:hidden block">
          <div>
            <button
              className="text-white text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMdMenu />
            </button>
          </div>

          <div className="absolute right-3 z-30 ">
            {isOpen && (
              <div>
                <ul className="flex flex-col items-center text-white gap-3 bg-black p-5">
                  <li>Features</li>
                  <li>
                    <select name="" className="bg-black" id="">
                      <option value="">Providers</option>
                      <option value="">Providers 1</option>
                      <option value="">Providers 2</option>
                      <option value="">Providers 3</option>
                    </select>
                  </li>
                  <li>Blog</li>
                  <li>Pricing</li>
                  <li>FAQ</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
