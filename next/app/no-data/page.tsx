const isBot = (userAgent: string) => {
  return /bot|crawler|spider|robot|crawling/i.test(userAgent);
};

async function data() {
  console.log("[/ data] started.");

  // console.log(
  //   "[/ data] isBot",
  //   isBot(navigator.userAgent),
  //   navigator.userAgent
  // );
  // if (isBot(navigator.userAgent)) {
  //   await new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(true);
  //     }, 1000);
  //   });
  // } else {
  //   return {};
  // }

  // console.log("[/ data] ended.");

  return {
    name: "John Doe",
    age: 30,
  };
}

export default async function NoDataPage() {
  const myData = await data();

  return <>You are in No Data Page. {JSON.stringify(myData)}</>;
}
