import { JSX, children, children as useChildren } from "solid-js";
import {
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Card,
  PaddingSize,
  TBD,
  Menu,
  MenuItem,
  MenuGroup,
} from "@hakina/ui";


export type Props = {
}

export const AppMenu = (props: Props) => {
  return (
    <el-h-stack
      wide={true}
      style={{
        height: "40px",
        "line-height": "40px",
        "background-color": "oklch(from var(--hakina-body-background) calc(l * 0.75) calc(c * 0.75) h)",
      }}
    >
      <el-h-stack
        wide={true}
        style={{
          "max-width": "720px",
        }}
      >

        <img
          src="/hakinaAlphaDark.png"
          style={{
            height: "40px",
          }}
        />
        <el-v-stack>Hakina</el-v-stack>
        <el-stack-separator/>
        <a href="/">Home</a>
        <a href="/sink">Kitchen Sink</a>
        <a href="/docs">Documentation</a>
        <a href="/sandbox">• Sandbox •</a>

      </el-h-stack>
    </el-h-stack>
  );
}

export default AppMenu;
