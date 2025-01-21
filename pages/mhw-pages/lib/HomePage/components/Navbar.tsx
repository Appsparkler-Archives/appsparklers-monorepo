import { GoHeartFill } from "react-icons/go";

export const Navbar = () => {
	return (
		<div className="navbar bg-primary text-primary-content border-8 border-base-100">
			<div className="flex-1">
				<button className="btn text-xl btn-ghost" type="button">My HFN World</button>
			</div>
			<div className="navbar-end">
				<a
					href="https://donations.heartfulness.org/"
					target="_blank"
					className="btn text-xl btn-ghost"
					rel="noreferrer"
				>
					<GoHeartFill size={24} />
				</a>
			</div>
		</div>
	);
};
