import { FC } from "react";
import "./portfolioList.scss";
interface IPortfolioList {
  id?: string;
  title?: string;
  active?: boolean;
  setSelected: Function;
}

const PortfolioList: FC<IPortfolioList> = ({
  id,
  title,
  active,
  setSelected,
}) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
