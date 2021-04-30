import dynamic from "next/dynamic";
const CustomStyleTransparent = dynamic(
  () =>
    import("../../../components/map/mdx/custom-styles/transparent-background.mdx"as any),
  {
    ssr: false,
  }
);

export default function () {
  return (
    <div>
      <CustomStyleTransparent />
    </div>
  );
}
