export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      className="bg-cyan-300"
      {...props}
      style={{ backgroundColor: "green" }}
    />
  );
};
