import { useMutation, UseMutationOptions } from "react-query";
import { singIn } from "../../data/auth";

export function useLogin(
  options?: UseMutationOptions<
    unknown,
    unknown,
    { username: string; password: string }
  >
) {
  const { onSuccess, ...restOptions } = options || {};
  return useMutation(
    async (request) => {
      const data = await singIn(request.username, request.password);
      return data;
    },
    {
      onSuccess: async (res, data, ctx) => {
        console.log("onSuccess, ", res, data, ctx);
      },
      ...restOptions,
    }
  );
}
