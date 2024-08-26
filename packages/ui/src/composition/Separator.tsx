import { JSX } from "solid-js";
import { hakinaElement, HakinaWebComponent, useParentStyle } from "$/utils/hakinaElement";
import { compositionClassList, CompositionProps } from "./Composition";


export type Props = {
}

const defaultProps: Required<Props> = {
}


hakinaElement("el-stack-separator", defaultProps, (props: Props & CompositionProps) => {
  return (
    <HakinaWebComponent
      style={`
        :host {
          display: block;
          flex: 1 1 auto;
        }
      `}
    />
  )
});

