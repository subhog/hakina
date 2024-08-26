import { JSX } from "solid-js";
import { hakinaElement, HakinaWebComponent } from "$/utils/hakinaElement";
import { compositionClassList, CompositionProps } from "./Composition";


export type Props = {
  children?: JSX.Element,
  styles?: JSX.CSSProperties;
}

const defaultProps: Required<Props> = {
  children: null,
  styles: {},
}

hakinaElement("el-v-scroll", defaultProps, (props: Props & CompositionProps) => {
  return (
    <HakinaWebComponent
      style={`
        :host {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          overflow-y: scroll;
        }
      `}
    >
      <slot/>
    </HakinaWebComponent>
  );
});
