import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <p>ページが見つかりません</p>
      <Link to="/">TOPに戻る</Link>
    </div>
  );
};
