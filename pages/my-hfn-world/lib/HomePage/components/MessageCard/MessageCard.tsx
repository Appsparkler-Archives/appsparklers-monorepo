import { BiError } from "react-icons/bi";

type MessageErrorType =
	| "Hindi message"
	| "English message"
	| "Hindi & English messages"
	| "None";

export interface IMessageCardProps {
	isProcessing: boolean;
	broadcastDate: string;
	error: MessageErrorType;
	isDownloadingHindiMessage: boolean;
	isDownloadingEnglishMessage: boolean;
}

export const MessageCard = ({
	isProcessing,
	broadcastDate,
	error,
	isDownloadingEnglishMessage,
	isDownloadingHindiMessage,
}: IMessageCardProps) => {
	const loadingIndicatorClasses = `loading loading-dots loading-xs text-warning${
		isProcessing ? "" : " invisible"
	}`;

	const errorMessageClassName = `alert alert-error alert-dash${
		error === "None" ? " invisible" : " visible"
	}`;

	const isHindiButtonDisabled =
		isProcessing ||
		error === "Hindi message" ||
		error === "Hindi & English messages" ||
		isDownloadingHindiMessage;

	const isEnglishButtonDisabled =
		isProcessing ||
		error === "English message" ||
		error === "Hindi & English messages" ||
		isDownloadingEnglishMessage;

	return (
		<div className="card bg-base-100 card-xs shadow-sm">
			<div className="card-body">
				<h2 className="card-title">
					Whispers From The Brighter World
					<span className={loadingIndicatorClasses} />
				</h2>
				<fieldset className="fieldset">
					<legend className="fieldset-legend">Select broadcast date:</legend>
					<input
						type="date"
						disabled={isProcessing}
						placeholder="Select Date"
						className="input w-full input-sm"
						min={"2019-01-09"}
						value={broadcastDate}
					/>
					<p className="fieldset-label">
						Click on the calendar or input field to enter the date.
					</p>
				</fieldset>
				<div className="flex justify-center gap-2">
					<button
						className="btn btn-primary btn-sm"
						type="button"
						disabled={isHindiButtonDisabled}
					>
						हिंदी में डाउनलोड करें
						<span
							className={`loading loading-dots loading-xs absolute${
								isDownloadingHindiMessage ? "" : " invisible"
							}`}
						/>
					</button>
					<button
						className="btn btn-primary btn-sm"
						disabled={isEnglishButtonDisabled}
						type="button"
					>
						Download in English
						<span
							className={`loading loading-dots loading-xs absolute${
								isDownloadingEnglishMessage ? "" : " invisible"
							}`}
						/>
					</button>
				</div>
				<div role="alert" className={errorMessageClassName}>
					<BiError />
					<span>
						Sorry, the {error} may not be available for the selected broadcast
						date.
					</span>
				</div>
			</div>
		</div>
	);
};
