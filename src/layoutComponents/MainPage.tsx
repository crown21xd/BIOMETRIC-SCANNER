import Headerx from "./Header";
import LeftContent from "./Left-content";
import RightContent from "./Right-content";

const MainPage = () => {
  return (
    <div>
      <div className="headerX">
        <Headerx />
      </div>
      <div className="container">
        <div className="leftcontent">
          <LeftContent />
        </div>
        <div className="rightcontent">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
