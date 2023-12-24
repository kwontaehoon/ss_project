import { useQuery, useMutation } from "react-query";
import { getTest } from "../../service/Test";

const TEST_KEYS = {
  test: "/test/board"
}

export const useTestQuery = () => {
    return useQuery(TEST_KEYS.test, async () => {
        const { data } = await getTest();
        return data;
    });
};