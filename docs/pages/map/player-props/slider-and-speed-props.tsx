import dynamic from "next/dynamic";
const SliderAndSpeedsProps = dynamic(() => import("../../../components/map/mdx/player-props/slider-and-speed-props.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <SliderAndSpeedsProps />
    </div>
  );
}
