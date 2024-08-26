import { JSX, children as useChildren } from "solid-js";

export type Props = {
  children?: JSX.Element;
}


export const SandboxLayout = (props: Props) => {
  const c = useChildren(() => props.children)

  // createEffect(() => {
  //   console.log("CHILDREN", c())
  // })

  // <el-h-stack tall={true} styles={"max-width: 536px"}>
  return (
    <el-h-stack
      tall={true}
      wide={true}
      styles={{"max-width": "1536px", "margin": "0px auto"}}
    >
      <el-v-scroll
        wide={true}
        tall={true}
        styles={{
          "max-width": "240px",
          "background-color": "oklch(from var(--hakina-body-background) calc(1 - (1 - l) * 7/8) calc(c * 7/8) h)",
          // "background-color": "orange",
        }}
      >
        <el-button href="/sandbox">Home</el-button>
        <el-button href="/sandbox/mess">Mess</el-button>
        <el-button href="/sandbox/noise">Noise</el-button>
        <el-button href="/sandbox/svg">SVG</el-button>
        <el-button href="/sandbox/colors">Colors</el-button>
        <el-stack-separator/>
        &middot;
      </el-v-scroll>
      <el-stack-separator/>
      <el-v-scroll wide={true} styles={{"max-width": "720px"}}>
        {c()}
        <el-stack-separator/>
      </el-v-scroll>
      <el-stack-separator/>
    </el-h-stack>
  );
}


export default SandboxLayout;

