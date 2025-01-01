import {
  HomePageContent,
  IHomePageContentProps,
} from "./components/HomePageContent";
import { Navbar } from "./components/Navbar";

export type HomePageProps = IHomePageContentProps;

export const HomePage = ({
  onChangeBroadcastDate,
  messageDate,
  messageLink,
}: HomePageProps) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col justify-center max-w-sm bg-base-100">
        <Navbar />
        <HomePageContent
          onChangeBroadcastDate={onChangeBroadcastDate}
          messageLink={messageLink}
          messageDate={messageDate}
        />
        <div className="h-6 bg-primary border-8 border-base-100" />
      </div>
    </div>
  );
};
