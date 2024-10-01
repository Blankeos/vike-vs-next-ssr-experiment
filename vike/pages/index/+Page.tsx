import { useData } from "vike-solid/useData";

export default function Page() {
  const data = useData();

  return (
    <>
      <div>DATA: {JSON.stringify(data)}</div>
    </>
  );
}
