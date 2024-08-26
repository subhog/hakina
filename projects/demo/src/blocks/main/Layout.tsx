import { JSX, children as useChildren } from "solid-js";
import AppMenu from "./AppMenu";
export type Props = {
  children?: JSX.Element;
}


export const Layout = (props: Props) => {
  const c = useChildren(() => props.children)
  return (
    <el-v-stack
      style={{width: "100dvw", height: "100dvh"}}
    >
      <AppMenu/>
      {c()}
    </el-v-stack>
  );
}

export default Layout;

