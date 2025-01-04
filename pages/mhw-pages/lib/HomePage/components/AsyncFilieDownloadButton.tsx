import { useCallback } from "react";

export const AsyncFilieDownloadButton = ({
  pdfDownloadLink,
}: {
  onClick: () => Promise<void>;
  inProgress: boolean;
  pdfDownloadLink: string;
}) => {
  const handleClick = useCallback(async () => {
    await fetch(pdfDownloadLink);
  }, [pdfDownloadLink]);

  return (
    <button
      className="btn btn-primary rounded-none"
      type="button"
      onClick={handleClick}
    >
      Download <span className="loading loading-dots loading-sm"></span>
    </button>
  );
};
