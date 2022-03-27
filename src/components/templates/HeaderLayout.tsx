import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props = {
  children: ReactNode; // タグ<></>で囲われた要素を渡すための型宣言
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props; // childrenには各ページの内容が入ってくる

  return (
    <> 
      <Header />
      { children }
    </>
  );
});