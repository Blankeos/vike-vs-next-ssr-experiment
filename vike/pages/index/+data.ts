export type Data = Awaited<ReturnType<typeof data>>;

const isBot = (userAgent: string) => {
  return /bot|crawler|spider|robot|crawling/i.test(userAgent);
};

export async function data() {
  console.log("[/ data] started.");

  console.log("[/ data] isBot", isBot(navigator.userAgent), navigator.userAgent);
  if (isBot(navigator.userAgent)) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  } else {
    return {};
  }

  console.log("[/ data] ended.");

  return {
    name: "John Doe",
    age: 30,
  };
}
