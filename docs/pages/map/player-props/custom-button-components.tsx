import dynamic from "next/dynamic";
const CustomButtonComponents = dynamic(() => import("../../../components/map/mdx/player-props/custom-button-components.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <CustomButtonComponents />
    </div>
  );
}
