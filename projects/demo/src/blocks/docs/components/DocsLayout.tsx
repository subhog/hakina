import { JSX, children, createEffect, children as useChildren } from "solid-js";
import {
  
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  
  TBD,
  Card,
  Modal,
  Mobile,
} from "@hakina/ui";

import DocsMenu from "./DocsMenu"

export type Props = {
  children?: JSX.Element;
}


export const Layout = (props: Props) => {
  const c = useChildren(() => props.children)

  // createEffect(() => {
  //   console.log("CHILDREN", c())
  // })

  // <el-h-stack tall={true} styles={"max-width: 536px"}>
  return (
    <el-h-stack wide={true} tall={true} styles={{"max-width": "1536px", "margin": "0px auto"}}>
      <el-v-scroll
        wide={true}
        style={{
          "max-width": "240px",
          "background-color": "oklch(from var(--hakina-body-background) calc(1 - (1 - l) * 7/8) calc(c * 7/8) h)",
        }}
      >
        <DocsMenu/>
        <el-stack-separator/>
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
// {/* <el-h-stack tall={true} styleOverride={{"max-width": "536px"}}> */}

export default Layout;

