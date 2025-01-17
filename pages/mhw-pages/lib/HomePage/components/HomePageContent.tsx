import { DateField, type IDateFieldProps } from "./DateField";
import { OBTLink } from "./OBTLink";
import { TenMaximsLink } from "./TenMaximsLink";
import { AWATAndAQLink } from "./AWATAndAQLink";
import { ImportantLinks } from "./ImportantLinks";
import { useBoolean } from "usehooks-ts";
import { useCallback } from "react";
import { PrivacyPolicyLink } from "./PrivacyPolicyLink";
import {
	AsyncFileDownloadButton,
	type IAsyncFileDownloadButtonProps,
} from "./AsyncFileDownloadButton";

export interface IHomePageContentProps {
	onChangeBroadcastDate: (date: string) => Promise<void>;
	messageLink?: string;
	messageDate?: string;
	onFileDownloadError: IAsyncFileDownloadButtonProps["onFileDownloadError"];
}

export const HomePageContent = ({
	onChangeBroadcastDate,
	messageDate,
	messageLink,
	onFileDownloadError,
}: IHomePageContentProps) => {
	const {
		value: isDisabled,
		setFalse: enableIt,
		setTrue: disableIt,
	} = useBoolean(true);

	const handleChangeDate: IDateFieldProps["onChangeDate"] = useCallback(
		async (date) => {
			disableIt();
			await onChangeBroadcastDate(date);
			enableIt();
		},
		[disableIt, enableIt, onChangeBroadcastDate],
	);

	return (
		<main className="flex flex-col gap-4 p-4 bg-base-100 opacity-[0.98]">
			<DateField
				onChangeDate={handleChangeDate}
				broadcastDate={messageDate}
				isCheckingForFile={isDisabled}
			/>
			<AsyncFileDownloadButton
				isCheckingForFile={isDisabled}
				messageBroadcastDate={messageDate}
				onFileDownloadError={onFileDownloadError}
				pdfDownloadLink={messageLink || ""}
			/>
			<OBTLink />
			<AWATAndAQLink />
			<TenMaximsLink />
			<ImportantLinks />
			<PrivacyPolicyLink />
		</main>
	);
};
