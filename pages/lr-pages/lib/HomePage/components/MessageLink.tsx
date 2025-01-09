import { useMemo } from "react";
import { formatDate } from "./utils/formatDate";

export interface IMessageLinkProps {
  messageBroadcastDate?: string;
  pdfDownloadLink?: string;
  isCheckingForFile: boolean;
}

export const MessageLink = ({
  messageBroadcastDate,
  pdfDownloadLink,
  isCheckingForFile: disabled,
}: IMessageLinkProps) => {
  
  const className = useMemo(() => {
    if (disabled) {
      return "btn btn-disabled w-full rounded-none h-auto";
    } else {
      return "btn btn-primary w-full rounded-none h-auto";
    }
  }, [disabled]);

  return (
    <a href={pdfDownloadLink} className={className} download>
      Read Whisper From The Brighter World broadcasted on:{" "}
      {messageBroadcastDate && formatDate(new Date(messageBroadcastDate))}
    </a>
  );
};
