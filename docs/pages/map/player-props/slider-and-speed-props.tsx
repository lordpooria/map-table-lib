import dynamic from "next/dynamic";
const SliderAndSpeedsProps = dynamic(() => import("../../../components/map/mdx/player-props/slider-and-speed-props.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <SliderAndSpeedsProps />
    </div>
  );
}
export default Page