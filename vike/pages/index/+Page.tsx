import { createSignal, Match, onMount, Show, Switch } from "solid-js";
import { useData } from "vike-solid/useData";
import { Data } from "./+data.shared";
import { unwrap } from "solid-js/store";
import { createQuery } from "@tanstack/solid-query";
import { useHydrate } from "@/utils/ssr/create-dehydrated-state";

export default function Page() {
  const data = useData<Data>();
  useHydrate(data.dehydratedState);

  const myQuery = createQuery(() => ({
    queryKey: ["home"],
    queryFn: async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });

      return {
        name: "John Doe",
        age: 30,
      };
    },
  }));

  return (
    <Switch fallback={<div>No Data...</div>}>
      <Match when={myQuery.data}>
        <div>
          {myQuery.data?.name} | {myQuery.data?.age}
        </div>
      </Match>
      <Match when={myQuery.isLoading}>
        <div>Loading...</div>
      </Match>
    </Switch>
  );
}
