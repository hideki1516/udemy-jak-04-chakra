import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage(); // Toastのコンポーネント
  const [loading, setLoading] = useState(false);
  const { setLoginUser } = useLoginUser();

  // 不要な再レンダリングを避けるため、関数にuseCallbackを指定
  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            // 疑似的にid=10のuserを管理者にする
            // id=10の場合はisAdminをtrue、そうでなければfalse
            const isAdmin = res.data.id === 10 ? true : false;
            setLoginUser({ ...res.data, isAdmin: isAdmin }); // スプレッド構文でisAdminプロパティを追加
            // useMessageコンポーネントのshoeMessageを使用
            showMessage({ title: "ログインしました", status: "success" });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりません",
              status: "error",
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
      // React state update on an unmounted component.
      // unmountしたstateで更新したらダメ！というエラーがでる
      // .finally(() => setLoading(false));
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
