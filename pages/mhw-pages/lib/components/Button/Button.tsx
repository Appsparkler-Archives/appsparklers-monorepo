export interface IButtonProps {
  variant?: "primary" | "secondary";
  size?: "xs" | "sm" | "lg";
  children?: React.ReactNode;
}

export const Button = (
  { variant, children, size }: IButtonProps = {
    variant: "primary",
    children: "",
    size: "xs",
  }
) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} children={children} />
  );
};
