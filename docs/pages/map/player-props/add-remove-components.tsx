import dynamic from "next/dynamic";
const AddRemoveComponents = dynamic(() => import("../../../components/map/mdx/player-props/add-remove-components.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <AddRemoveComponents />
    </div>
  );
}
export default Page