import { FaList, FaRegHeart } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FiHome } from "react-icons/fi";

const routesData = [
  {
    path: "/admin",
    key: 0,
    title: "Home",
    icon: <FiHome />,
    active: true,
  },
  {
    path: "create",
    key: "1",
    title: "Create course",
    icon: <FaList />,
  },
  {
    path: "teacher",
    key: "2",
    title: "Teacher",
    icon: <FaRegHeart />,
  },
  {
    path: "favourite",
    key: "3",
    title: "Favourite",
    icon: <RiPencilLine />,
  },
  {
    path: "settings",
    key: "4",
    title: "Settings",
    icon: <BiCog />,
  },
];
export default routesData;
