import { Navbar } from "./components/Navbar";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col justify-center max-w-sm bg-base-100">
        <Navbar />
      </div>
    </div>
  );
};
