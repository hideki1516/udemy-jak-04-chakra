import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

type Props = {
  title: string;
  // toastの4種類のstatusを型定義、これらいずれかの文字列に一致
  status: "info" | "warning" | "success" | "error";
};

export const useMessage = () => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: Props) => {
      const { title, status } = props;
      toast({
        title,
        status,
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );
  return { showMessage };
};
