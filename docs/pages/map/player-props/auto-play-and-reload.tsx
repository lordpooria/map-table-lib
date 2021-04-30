import dynamic from "next/dynamic";
const AutoPlayAndReload = dynamic(() => import("../../../components/map/mdx/player-props/auto-play-and-reload.mdx"as any), {
  ssr: false,
});

export default function () {
  return (
    <div>
      <AutoPlayAndReload />
    </div>
  );
}
