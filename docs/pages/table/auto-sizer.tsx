import dynamic from "next/dynamic";
const AutoSizer = dynamic(
  () => import("../../components/table/mdx/auto-sizer.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <AutoSizer />
    </div>
  );
}
export default Page