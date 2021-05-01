import dynamic from "next/dynamic";
const SimpleTable = dynamic(
  () => import("../../components/table/mdx/simple-table.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <SimpleTable />
    </div>
  );
}
export default Page