import { useMemo } from "react";

export interface IMessageLinkProps {
  messageBroadcastDate?: string;
  messageLink?: string;
  disabled: boolean;
}

export const MessageLink = ({
  messageBroadcastDate,
  messageLink,
  disabled,
}: IMessageLinkProps) => {
  const className = useMemo(() => {
    if (disabled) {
      return "btn btn-disabled w-full rounded-none h-auto";
    } else {
      return "btn btn-primary w-full rounded-none h-auto";
    }
  }, [disabled]);
  return (
    <a href={messageLink} className={className} download>
      Read Whisper From The Brighter World broadcasted on{" "}
      {messageBroadcastDate &&
        new Date(messageBroadcastDate).toLocaleDateString()}
    </a>
  );
};
