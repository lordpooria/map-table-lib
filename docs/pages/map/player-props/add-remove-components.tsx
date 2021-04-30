import dynamic from "next/dynamic";
const AddRemoveComponents = dynamic(() => import("../../../components/map/mdx/player-props/add-remove-components.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <AddRemoveComponents />
    </div>
  );
}
