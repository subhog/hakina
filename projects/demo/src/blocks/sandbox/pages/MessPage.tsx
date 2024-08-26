
import {
  ButtonLook,
  Color,
  Heading3,
  Tabs,
  Tab,
  useTabs,
  Demo,
  Feed,
  FeedCard,
  FeedHeader,
  Menu,
  MenuGroup,
  MenuItem,
  MenuLook,
  PaddingSize,
} from "@hakina/ui";
import { Example } from "$/blocks/example";
import { createSignal, onCleanup, onMount } from "solid-js";




export const MessPage = () => {
  const [clock, setClock] = createSignal(0);
  let interval: number | null = null;


  onMount(() => {
    interval = setInterval(() => {
      setClock(i => i + 1)
    }, 1000)
  })

  onCleanup(() => {
    if(interval !== null) {
      clearInterval(interval);
      interval = null;
    }
  })

  
  return (
    <Feed>      
      <FeedHeader>
        Sandbox
      </FeedHeader>
      
      <FeedHeader>
        Filters
      </FeedHeader>

      <div>

      <svg
        width="200"
        height="200"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg">
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="3"
            result="turbulence" />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G" />
        </filter>
      </svg>
      <svg
        width="200"
        height="200"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg">
        <filter id="textFilter">

          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="3"
            result="turbulence"
            shape-rendering="crispEdges"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
            shape-rendering="crispEdges"
          />
          <feMorphology
            in="displaced"
            operator="dilate"
            radius="2"
            shape-rendering="crispEdges"
          />
        </filter>
      </svg>

      <div
        style={{
          padding: "20px",
          "font-size": "120px",
          "font-family": "Fira Mono",
          "font-weight": "300",
          filter: "url(#textFilter)"
        }}
      >

        Errata Art
      </div>

      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            filter: "url(#displacementFilter)",
            width: "195px",
            height: "45px",
            // "border-radius": "10px",
            background: "#F0C000",
            // border: "5px solid #F08000",
          }}
        />
        <div
          style={{
            width: "200px",
            height: "50px",
            position: "absolute",
            "text-align": "center",
            "line-height": "50px",
            // background: "rgba(255, 255, 255, 0.125)",
          }}
        >
          Button
        </div>
      </div>

      </div>

      <FeedHeader>
        Clock
      </FeedHeader>

      <Example
        code={`
          <el-padded-stack>
            {clock()}
          </el-padded-stack>
        `}
      >
        <el-padded-stack>
          THIS IS PADDED! {clock()}
        </el-padded-stack>
      </Example>

    
    <Example
        code={`
          <el-padded-stack>
            {clock()}
          </el-padded-stack>
        `}
      >
        <el-padded-stack padding={PaddingSize.LARGEST}>
          THIS IS PADDED! {clock()}
        </el-padded-stack>
      </Example>
    </Feed>
  );
}

export default MessPage;
