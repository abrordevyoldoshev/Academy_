import {MdPlayLesson} from "react-icons/md";
import {RiPencilLine} from "react-icons/ri";
import {CgFolderAdd} from "react-icons/cg";
import {BiCog} from "react-icons/bi";
import {RiDashboard3Line} from "react-icons/ri";
import {BsFillBookFill} from "react-icons/bs";
import {MdOutlineCategory} from "react-icons/md";
import {Link} from "react-router-dom";

const routeData = [
    {
        key: 0,
        label: <Link to='/admin'>Dashboard</Link>,
        icon: <RiDashboard3Line/>,
    },
    {
        key: 1,
        label: <Link to='category'> Category</Link>,
        icon: <MdOutlineCategory/>,
    },
    {
        key: 2,
        label: <Link to='course'> Course</Link>,
        icon: <CgFolderAdd/>,
    },
    {

        key: 4,
        label: <Link to='lesson'>Lesson</Link>,
        icon: <MdPlayLesson/>,
    },

    {
        key: 5,
        label: <Link to='book'> Book</Link>,
        icon: <BsFillBookFill/>,
    },
    {

        key: 6,
        label: <Link to='settings'>Settings</Link>,
        icon: <BiCog/>,
    },
    {

        key: 7,
        label: <Link to='favourite'>Favourite</Link>,
        icon: <RiPencilLine/>,
    },

];
export default routeData;
