import dynamic from "next/dynamic";
const AutoPlayAndReload = dynamic(() => import("../../../components/map/mdx/player-props/auto-play-and-reload.mdx"as any), {
  ssr: false,
});

function Page() {
  return (
    <div>
      <AutoPlayAndReload />
    </div>
  );
}
export default Page