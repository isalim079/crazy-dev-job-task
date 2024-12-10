import { MdChevronRight } from "react-icons/md";
import logo from "../../assets/img/logo.png";
import logoTxt from "../../assets/img/logoTxt.png";

const Navbar = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between font-jakarta">
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
        <div>
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
        <div className="flex items-center gap-3">
            <div className="">
                <button className="border border-white text-white rounded-full px-4 py-2">Log In</button>
            </div>
            <div >
                <button className="bg-white px-4 py-2 rounded-full flex items-center gap-1">Get Started <span className="flex items-center text-lg"><MdChevronRight  /> <MdChevronRight className="-ml-3" /></span></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
