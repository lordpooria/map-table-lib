import dynamic from "next/dynamic";
const CustomButtonComponents = dynamic(() => import("../../../components/map/mdx/player-props/custom-button-components.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <CustomButtonComponents />
    </div>
  );
}
export default Page