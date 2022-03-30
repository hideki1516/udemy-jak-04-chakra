import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定し、モーダルを表示するカスタムフック
export const useSelectUser = () => {
  // セレクトされたユーザーの情報を管理するState
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // クリックされたときにユーザーを特定する関数
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    // find:条件に一致した最初の要素を返すメソッド
    // 各usersのidとUserCardから渡されたidが一致する要素を返す
    const targetUser = users.find((user) => user.id === id);

    // findで見つからない場合はundefinedを返す
    // 左辺がundefinedの場合、右辺を実行する??を使用する
    setSelectedUser(targetUser ?? null);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
