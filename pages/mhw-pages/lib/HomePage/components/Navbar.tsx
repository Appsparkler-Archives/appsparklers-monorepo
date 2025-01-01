import { GoHeartFill } from "react-icons/go";

export const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content border-8 border-base-100">
      <div className="flex-1">
        <button className="btn btn-ghost text-xl">My HFN World</button>
      </div>
      <div className="navbar-end">
        <a
          href="https://donations.heartfulness.org/"
          target="_blank"
          className="btn btn-ghost text-xl"
        >
          <GoHeartFill size={24} />
        </a>
      </div>
    </div>
  );
};
