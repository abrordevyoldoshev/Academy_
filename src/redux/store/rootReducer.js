import auth from "../reducer/userReducer";
import toggle from "../reducer/toggleSlice";
import product from "../reducer/allProductSlice";
import category from "../reducer/categorySlice";
import name from "../reducer/userNameSlice";
import course from '../reducer/allCourseSlice'
const rootReducer = {
  auth,
  toggle,
  product,
  name,
  category,
  course
};
export default rootReducer;
