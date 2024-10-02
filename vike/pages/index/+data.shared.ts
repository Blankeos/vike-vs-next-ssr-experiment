import { createDehydratedState } from "@/utils/ssr/create-dehydrated-state";
import { PageContext } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

const isBot = (userAgent: string) => {
  return /bot|crawler|spider|robot|crawling/i.test(userAgent);
};

export async function data(pageContext: PageContext) {
  if (typeof window !== "undefined") return {};

  // When on server.
  console.log("[/ data] started.");

  // console.log("[/ data] isBot", isBot(navigator.userAgent), navigator.userAgent);
  // if (isBot(navigator.userAgent)) {
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, 1000);
  //   });
  // }

  const dehydratedState = await createDehydratedState([
    {
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
    },
  ]);

  console.log("[/ data] ended.");

  return {
    // Try commenting this out and see how the page will just fallback to
    // TanStack Query.
    dehydratedState,
  };
}
