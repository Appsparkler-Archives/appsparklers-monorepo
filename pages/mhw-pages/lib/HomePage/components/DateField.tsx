import { useEffect, useRef } from "react";
import { getTodaysDateWithOffset } from "./utils/getTodaysDateWithOffset";

type HTMLInputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

export interface IDateFieldProps {
  onChangeDate: (date: string) => void;
  isCheckingForFile: boolean;
  broadcastDate?: string; // 2024-09-01 - September 1st, 2024
}

export const DateField = ({
  broadcastDate,
  onChangeDate,
  isCheckingForFile,
}: IDateFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeDate: HTMLInputChangeHandler = (evt) => {
    if (evt.target.value) {
      onChangeDate(evt.target.value);
    }
  };

  useEffect(() => {
    const todaysDateWithOffset = getTodaysDateWithOffset();
    if (inputRef.current) {
      inputRef.current.max = todaysDateWithOffset;
    }
    onChangeDate(todaysDateWithOffset);
  }, [onChangeDate]);

  return (
    <label className="form-control w-full bg-base-100">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Select broadcast date:</legend>
        <input
          ref={inputRef}
          type="date"
          disabled={isCheckingForFile}
          value={broadcastDate}
          placeholder="Select Date"
          className="input w-full"
          onChange={handleChangeDate}
          min={"2019-01-09"}
        />
        <p className="fieldset-label">
          Click on the calendar or input field to enter the date.
        </p>
      </fieldset>
    </label>
  );
};
