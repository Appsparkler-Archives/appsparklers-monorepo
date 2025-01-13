import { useCallback } from "react";
import { useBoolean } from "usehooks-ts";
import { formatDate } from "./utils/formatDate";

export interface IAsyncFileDownloadButtonProps {
  messageBroadcastDate?: string;
  isCheckingForFile: boolean;
  pdfDownloadLink: string;
  onFileDownloadError: (error: Error) => void;
}

export const AsyncFileDownloadButton = ({
  messageBroadcastDate,
  isCheckingForFile,
  pdfDownloadLink,
  onFileDownloadError,
}: IAsyncFileDownloadButtonProps) => {
  const {
    value: isDownloading,
    setFalse: setIsDownloadingToFalse,
    setTrue: setIsDownloadingToTrue,
  } = useBoolean(false);
  const handleClick = useCallback(async () => {
    try {
      setIsDownloadingToTrue();
      const res = await fetch(pdfDownloadLink);
      const blob = await res.blob();
      if (blob instanceof Blob && blob.type === "application/pdf") {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = messageBroadcastDate
          ? `message-${messageBroadcastDate}.pdf`
          : "message.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error("Not a Blob");
      }
    } catch (error) {
      if (error instanceof Error) {
        onFileDownloadError(error);
      }
    } finally {
      setIsDownloadingToFalse();
    }
  }, [
    messageBroadcastDate,
    onFileDownloadError,
    pdfDownloadLink,
    setIsDownloadingToFalse,
    setIsDownloadingToTrue,
  ]);

  const visibility =
    isCheckingForFile || isDownloading ? "visible" : "invisible";

  return (
    <button
      className="btn btn-primary rounded-none p-1 h-auto"
      type="button"
      onClick={handleClick}
      disabled={isCheckingForFile || isDownloading}
    >
      Read Whisper From The Brighter World broadcasted on:{" "}
      {messageBroadcastDate && formatDate(new Date(messageBroadcastDate))}
      <span
        className={`loading loading-dots loading-sm absolute ${visibility}`}
      />
    </button>
  );
};
