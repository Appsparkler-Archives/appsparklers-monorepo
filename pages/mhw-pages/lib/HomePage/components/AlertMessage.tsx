export const AlertMessage: React.FC<{
	onClose: () => void;
}> = ({ onClose }) => {
	return (
		<div
			role="alert"
			className="
        fixed top-0 left-0 right-0 z-10 
        alert alert-info 
        rounded-none
        p-1
      "
		>
			<div>
				<h3 className="font-bold">Message wasn't downloaded!</h3>
				<div className="text-xs">Please try again</div>
			</div>
			<button
				className="btn btn-sm btn-outline"
				type="button"
				onClick={onClose}
			>
				Close
			</button>
		</div>
	);
};
