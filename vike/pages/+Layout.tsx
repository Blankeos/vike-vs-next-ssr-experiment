import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { createSignal, type FlowProps } from "solid-js";

export default function RootLayout(props: FlowProps) {
  const queryClient = new QueryClient({});
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <a href="/">Page with Data (/)</a>
          <a href="/no-data">Page with No Data (/no-data)</a>
        </nav>
        {props.children}
      </div>
    </QueryClientProvider>
  );
}

function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      Root Counter {count()}
    </button>
  );
}
