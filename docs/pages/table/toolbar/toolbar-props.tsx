import dynamic from "next/dynamic";
const ToolbarProps = dynamic(
  () => import("../../../components/table/mdx/toolbar/toolbar-props.mdx" as any),
  {
    ssr: false,
  }
);

function Page() {
  return (
    <div >
      <ToolbarProps />
    </div>
  );
}
export default Page
