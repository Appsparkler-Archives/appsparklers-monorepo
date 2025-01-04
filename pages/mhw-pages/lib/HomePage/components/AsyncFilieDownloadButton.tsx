import { useCallback } from "react";
import { useBoolean } from "usehooks-ts";

export const AsyncFilieDownloadButton = ({
  fileName,
  isCheckingForFile,
  pdfDownloadLink,
  onFileDownloadError,
}: {
  isCheckingForFile: boolean;
  fileName: string;
  onFileDownloadError: (error: Error) => void;
  pdfDownloadLink: string;
}) => {
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
        link.download = fileName || "message.pdf";
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
    fileName,
    onFileDownloadError,
    pdfDownloadLink,
    setIsDownloadingToFalse,
    setIsDownloadingToTrue,
  ]);

  const visibility =
    isCheckingForFile || isDownloading ? "visible" : "invisible";

  return (
    <button
      className="btn btn-primary rounded-none h-auto"
      type="button"
      onClick={handleClick}
      disabled={isCheckingForFile || isDownloading}
    >
      Read Whisper From The Brighter World broadcasted on: Nov 22nd, 2024
      <span
        className={`loading loading-dots loading-sm absolute ${visibility}`}
      />
    </button>
  );
};
