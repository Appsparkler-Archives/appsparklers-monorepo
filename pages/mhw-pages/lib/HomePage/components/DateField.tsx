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
  isCheckingForFile: disabled,
}: IDateFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeDate: HTMLInputChangeHandler = (evt) => {
    if (evt.target.value) {
      onChangeDate(evt.target.value);
    }
  };

  useEffect(() => {
    onChangeDate(getTodaysDateWithOffset());
  }, [onChangeDate]);

  return (
    <label className="form-control w-full bg-base-100">
      <div className="label">
        <span className="label-text">Select broadcast date:</span>
      </div>
      <input
        ref={inputRef}
        type="date"
        disabled={disabled}
        value={broadcastDate}
        placeholder="Select Date"
        className="input input-bordered w-full"
        onChange={handleChangeDate}
        min={"2019-01-09"}
      />
      <div className="label">
        <span className="label-text-alt">
          Click on the calendar or input field to enter the date.
        </span>
        {/* <span className="label-text-alt">Bottom Right label</span> */}
      </div>
    </label>
  );
};
