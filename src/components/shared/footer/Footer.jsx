import React from 'react';

const Footer = () => {
    return (
      <div className="container mx-auto bg-forest-green py-6">
        <footer className="footer footer-horizontal footer-center text-white p-10">
          <aside>
            <p className="font-bold text-[4.4vh]">KeenKeeper</p>
            <p className="text-[1.4vh]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </aside>
          <nav>
            <div>
              <p className='text-xl'>Social Links</p>
            </div>
            <div className="grid grid-flow-col gap-4">
              <a>
                <img
                  src="/src/assets/images/instagram.png"
                  alt=""
                />
              </a>
              <a>
                <img
                  src="/src/assets/images/facebook.png"
                  alt=""
                />
              </a>
              <a>
                {" "}
                <img
                  src="/src/assets/images/twitter.png"
                  alt=""
                />
              </a>
            </div>
          </nav>
        </footer>
        <footer className="footer  text-[#59786d] border-[#59786d]  px-10 py-4">
          <div className="navbar border-t flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 pt-4">
            <div>
              <p>© {new Date().getFullYear()} Copyright. All right reserved.</p>
            </div>
            <div className="grid sm:grid-col md:flex gap-4 mr-3">
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;