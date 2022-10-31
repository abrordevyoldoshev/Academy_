import { FaList, FaRegHeart } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import {Link} from "react-router-dom";

const routesData = [
  {
    key: 0,
    label: <Link to='/admin'>Home</Link>,
    icon: <FiHome />,
  },
  {
    key: "1",
    label: <Link to='create'>Create Course</Link>,
    icon: <FaList />,
  },
  {
    to:  'teacher',
    key: "2",
    label: <Link to='teacher'>Teacher</Link>,
    icon: <FaRegHeart />,
  },
  {
    to: 'favourite',
    key: "3",
    label: <Link to='settings'>Settings</Link>,
    icon: <RiPencilLine />,
  },
  {
    to:'settings' ,
    key: "4",
    label:<Link to='favourite'>Favourite</Link>,
    icon: <BiCog />,
  },
];
export default routesData;
