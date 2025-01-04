import { useCallback } from "react";
import { useBoolean } from "usehooks-ts";

export const AsyncFilieDownloadButton = ({
  fileName,
  pdfDownloadLink,
  onFileDownloadError,
}: {
  fileName: string;
  onFileDownloadError: (error: Error) => void;
  pdfDownloadLink: string;
}) => {
  const {
    value: inProgress,
    setFalse: setInProgressFalse,
    setTrue: setInProgressTrue,
  } = useBoolean(false);
  const handleClick = useCallback(async () => {
    try {
      setInProgressTrue();
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
      setInProgressFalse();
    }
  }, [
    fileName,
    onFileDownloadError,
    pdfDownloadLink,
    setInProgressFalse,
    setInProgressTrue,
  ]);

  const visibility = inProgress ? "visible" : "invisible";

  return (
    <button
      className="btn btn-primary rounded-none h-auto"
      type="button"
      onClick={handleClick}
      disabled={inProgress}
    >
      Read Whisper From The Brighter World broadcasted on: Nov 22nd, 2024
      <span
        className={`loading loading-dots loading-sm absolute ${visibility}`}
      />
    </button>
  );
};
