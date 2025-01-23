import {
	HomePage,
	type HomePageProps,
} from "@repo/pages-mhw/dist/HomePage/HomePage";
import { AlertMessage } from "@repo/pages-mhw/dist/HomePage/components/AlertMessage";
import { useCallback, useState } from "react";
import { useBoolean } from "usehooks-ts";

export const getDownloadURLOriginal = async (date: string) => {
	return fetch(
		`https://us-central1-my-hfn.cloudfunctions.net/getPdfUrl?date=${date}`,
	).then((res) => res.text());
};

export const App = () => {
	const [broadcastDate, setBroadcastDate] = useState<string>("");
	const {
		value: isErrorShown,
		setFalse: hideErrorMessage,
		setTrue: showErrorMessage,
	} = useBoolean(false);
	const [downloadURL, setDownloadURL] = useState<string>();

	const handleChangeBroadcastDate: HomePageProps["onChangeBroadcastDate"] =
		useCallback(
			async (date: string) => {
				setBroadcastDate(date);
				try {
					const url = await getDownloadURLOriginal(date);
					setDownloadURL(url);
				} catch (e) {
					console.error(e);
					showErrorMessage();
				}
			},
			[showErrorMessage],
		);

	return (
		<>
			{isErrorShown && <AlertMessage onClose={hideErrorMessage} />}
			<HomePage
				onChangeBroadcastDate={handleChangeBroadcastDate}
				messageLink={downloadURL || ""}
				messageDate={broadcastDate}
				onFileDownloadError={showErrorMessage}
			/>
		</>
	);
};

export default App;
