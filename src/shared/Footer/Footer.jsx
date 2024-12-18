import postiz from "../../assets/img/postiz.png";

const Footer = () => {
  return (
    <div className="-mt-[160px] relative z-20">
      <footer className="footer bg-darkGrey text-white/70 p-10 py-14 max-w-screen-xl mx-auto rounded-2xl font-jakarta">
        <aside>
          <img className="w-[60%] mb-2" src={postiz} alt="" />
          <p>Open-source social media scheduling tool</p>
        </aside>
        <nav>
          <h6 className=" text-white text-lg font-semibold">Free Tools</h6>
          <a className="link link-hover">Free Marketing Tools</a>
          <a className="link link-hover">List your agency</a>
        </nav>
        <nav>
          <h6 className=" text-white text-lg font-semibold">Resources</h6>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Docs</a>
          <a className="link link-hover">Channels</a>
          <a className="link link-hover">Roadmap</a>
          <a className="link link-hover">Discord</a>
          <a className="link link-hover">Alternatives</a>
          <a className="link link-hover">Comparisons</a>
        </nav>
        <nav>
          <h6 className=" text-white text-lg font-semibold">Company</h6>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Terms of service</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
      </footer>

      <div className="max-w-screen-xl mx-auto bg-darkGrey pt-10 pb-10 px-10">
        <p className="text-white/70">
          © Postiz, {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
