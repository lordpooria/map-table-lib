import dynamic from "next/dynamic";
const StickyColumn = dynamic(
  () => import("../../components/table/mdx/sticky-column.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <StickyColumn />
    </div>
  );
}
export default Page