import { Card } from "../ui/card/Card";
import { Header } from "../ui/header/Header";

export const HomePage = () => {
  return (
    <div className=" flex flex-col items-center">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <Card />
      </div>
    </div>
  );
};
