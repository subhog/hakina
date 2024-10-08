import { JSX, createSignal, onMount, children as useChildren } from "solid-js";

import {
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  FeedHeader,
  TBD,
  FeedCard,
  Card,
  Feed,
  Modal,
} from "@hakina/ui";
import style from "./ThemePage.module.scss";
import { useAnchors } from "$/blocks/anchors";


function componentToHex(c: number) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const ColorBox = (props: {
  color: string,
}) => {
  const [value, setValue] = createSignal("");
  const [light, setLight] = createSignal(false);

  let div: HTMLDivElement | undefined = undefined;

  onMount(() => {
    const rgb = getComputedStyle(div!).backgroundColor.match(/rgb\W*(\w+)\W*(\w+)\W*(\w+)\W*/);
    if(rgb) {
      const r = +rgb[1];
      const g = +rgb[2];
      const b = +rgb[3];
      const sum = 0.299 * r * r + 0.587 * g * g + 0.114 * b * b;
      setValue(rgbToHex(r, g, b));
      if(sum > 0.52 * 255 * 255) {
        setLight(true);
      }
    }
  });

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  }

  return (
    <div
      classList={{
        [style.colorBox]: true,
        [style.light]: light(),
      }}
      style={{
        "background-color": `var(${props.color})`,
      }}
      ref={div}
    >
      <div
        onClick={() => handleCopy(props.color)}
      >
        {props.color}
      </div>
      <div
        onClick={() => handleCopy(value())}
        class={style.colorHex}
      >
        {value()}
      </div>
    </div>
  )
}


const ColorLine = (props: {
  children?: JSX.Element,
}) => {
  const c = useChildren(() => props.children);
  return (
    <div class={style.colorLine}>
      {c()}
    </div>
  );
}

const FontBox = (props: {
  font: string,
}) => {
  return (
    <div
      class={style.fontBox}
      style={{
        font: `var(${props.font})`,
      }}
    >
      {props.font}
    </div>
  );
}



export const Template = () => {
  const [anchors] = useAnchors();
  
  return (
    <Feed>
      <FeedHeader ref={anchors["colors"]}>
        Colors
      </FeedHeader>
      <FeedCard>
        
        <ColorLine>
          {/* <ColorBox color="--legacy-color-blue-1"/> */}
          <ColorBox color="--legacy-color-blue-2"/>
          <ColorBox color="--legacy-color-blue-3"/>
          <ColorBox color="--legacy-color-blue-4"/>
          <ColorBox color="--legacy-color-blue-5"/>
        </ColorLine>
        
        <ColorLine>
          <ColorBox color="--legacy-color-red-2"/>
          <ColorBox color="--legacy-color-red-3"/>
          <ColorBox color="--legacy-color-red-4"/>
        </ColorLine>
        
        <ColorLine>
          <ColorBox color="--legacy-color-yellow-2"/>
          <ColorBox color="--legacy-color-yellow-3"/>
          <ColorBox color="--legacy-color-yellow-4"/>
        </ColorLine>

        <ColorLine>
          <ColorBox color="--legacy-color-green-2"/>
          <ColorBox color="--legacy-color-green-3"/>
          <ColorBox color="--legacy-color-green-4"/>
        </ColorLine>

        <ColorLine>
          <ColorBox color="--legacy-color-white-1"/>
          <ColorBox color="--legacy-color-white-2"/>
          <ColorBox color="--legacy-color-white-3"/>
        </ColorLine>
        <ColorLine>
          <ColorBox color="--legacy-color-silver-2"/>
          <ColorBox color="--legacy-color-silver-3"/>
          <ColorBox color="--legacy-color-silver-4"/>
        </ColorLine>
        <ColorLine>
          <ColorBox color="--legacy-color-grey-2"/>
          <ColorBox color="--legacy-color-grey-3"/>
          <ColorBox color="--legacy-color-grey-4"/>
        </ColorLine>
        <ColorLine>
          <ColorBox color="--legacy-color-black-3"/>
          <ColorBox color="--legacy-color-black-4"/>
          <ColorBox color="--legacy-color-black-5"/>
        </ColorLine>
      </FeedCard>

      <FeedHeader ref={anchors["fonts"]}>
        Fonts
      </FeedHeader>
      <FeedCard>
        <FontBox font="--legacy-font-heading-1"/>
        <FontBox font="--legacy-font-heading-2"/>
        <FontBox font="--legacy-font-heading-3"/>
        <FontBox font="--legacy-font-heading-4"/>
        <FontBox font="--legacy-font-subheader-regular"/>
        <FontBox font="--legacy-font-subheader-medium"/>
        <FontBox font="--legacy-font-body-regular"/>
        <FontBox font="--legacy-font-body-medium"/>
        <FontBox font="--legacy-font-body-bold"/>
        <FontBox font="--legacy-font-small-regular"/>
        <FontBox font="--legacy-font-small-medium"/>
        <FontBox font="--legacy-font-small-bold"/>
        <FontBox font="--legacy-font-caption-regular"/>
        <FontBox font="--legacy-font-tiny-regular"/>
      </FeedCard>

    </Feed>

    


  );
}

export default Template;
