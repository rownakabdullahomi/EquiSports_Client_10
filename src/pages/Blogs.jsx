import { Helmet } from "react-helmet-async";
import NoData from "../components/NoData";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs | EquiSports</title>
      </Helmet>
      <NoData></NoData>
    </div>
  );
};

export default Blogs;
