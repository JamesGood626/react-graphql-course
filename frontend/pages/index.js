import Items from "../components/Items";
import { Query } from "../node_modules/react-apollo";

const Home = ({ query }) => {
  return (
    <div>
      <Items page={parseFloat(query.page) || 1} />
    </div>
  );
};

export default Home;
