import MenuSvg from "./MenuSvg";
import MessageSvg from "./MessageSvg";
import StatusSvg from "./StatusSvg";

const SideBar: React.FC = () => {
  return (
    <>
      <StatusSvg />
      <MessageSvg />
      <MenuSvg />
    </>
  );
};

export default SideBar;
