export interface IButtonProps {
  children?: React.ReactNode;
}

export const Button = (
  { children }: IButtonProps = {
    children: "",
  }
) => {
  return <button className={"btn btn-primary btn-sm"} children={children} />;
};
