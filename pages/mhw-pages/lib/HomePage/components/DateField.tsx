import { useEffect } from "react";

type HTMLInputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

const GMTOffset = new Date().getTimezoneOffset() * 60 * 1000;

const defaultDate = new Date(Date.now() - GMTOffset)
  .toISOString()
  .split("T")[0];

export interface IDateFieldProps {
  onChangeDate: (date: string) => void;
  disabled: boolean;
}

export const DateField = ({ onChangeDate, disabled }: IDateFieldProps) => {
  const handleChangeDate: HTMLInputChangeHandler = (evt) => {
    if (evt.target.value) {
      onChangeDate(evt.target.value);
    }
  };

  useEffect(() => {
    onChangeDate(defaultDate);
  }, [onChangeDate]);

  return (
    <label className="form-control w-full bg-base-100">
      <div className="label">
        <span className="label-text">Select broadcast date:</span>
      </div>
      <input
        type="date"
        disabled={disabled}
        defaultValue={defaultDate}
        placeholder="Select Date"
        className="input input-bordered w-full"
        onChange={handleChangeDate}
        min={"2019-01-09"}
        max={defaultDate}
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
