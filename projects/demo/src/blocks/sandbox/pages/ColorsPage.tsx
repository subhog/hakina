import { PaddingSize } from "@hakina/ui";
import { JSX, children as useChildren } from "solid-js";

const Swatch = (props: {
  color: string,
  children?: JSX.Element;
}) => {
  const c = useChildren(() => props.children)

  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        "border-radius": "4px",
        "background-color": props.color,
        display: "inline-block",
        "text-align": "center",
        "line-height": "48px",
        color: "rgba(0, 0, 0, 0.25)",
        "font-weight": "500",
      }}
    >
      {c()}
    </div>
  )
}

const Hue = (props: {
  hue: number,
}) => {
  return (
    <div style={{
      margin: "4px",
      display: "inline-block",
    }}>
      <el-v-stack>
        <Swatch color={`oklch(70% 0.06 ${props.hue})`}></Swatch>
        <Swatch color={`oklch(70% 0.12 ${props.hue})`}></Swatch>
        <Swatch color={`oklch(70% 0.18 ${props.hue})`}>{props.hue}</Swatch>
        <Swatch color={`oklch(70% 0.24 ${props.hue})`}></Swatch>
        <Swatch color={`oklch(70% 0.3 ${props.hue})`}></Swatch>
        <Swatch color={`oklch(70% 0.36 ${props.hue})`}></Swatch>
      </el-v-stack>
    </div>
  )
}

const Blend = (props: {
  from: string,
}) => {
  return (
    <div style={{
      margin: "4px",
      display: "inline-block",
    }}>
      <el-v-stack>
        <Swatch color={`oklch(from ${props.from} calc(l * 0.5) calc(c * 0.5) h)`}></Swatch>
        <Swatch color={`oklch(from ${props.from} calc(1 - (1 - l) * 0.5) calc(c * 0.5) h)`}></Swatch>
        {/* <Swatch color={`color-mix(in oklch shorter hue, ${props.from}, oklch(from ${props.from} l c h), 0%)`}></Swatch> */}
        {/* <Swatch color={`color-mix(in oklch shorter hue, ${props.from}, oklch(from ${props.from} l c h), 25%)`}></Swatch>
        <Swatch color={`color-mix(in oklch shorter hue, ${props.from}, oklch(from ${props.from} l c h), 50%)`}></Swatch>
        <Swatch color={`color-mix(in oklch shorter hue, ${props.from}, oklch(from ${props.from} l c h), 75%)`}></Swatch>
        <Swatch color={`color-mix(in oklch shorter hue, ${props.from}, oklch(from ${props.from} l c h), 100%)`}></Swatch> */}
      </el-v-stack>
    </div>
  )
}


// const degs = new Array(18).fill(0).map((val, idx) => 5 + idx * 20)


export const ColorsPage = () => {  
  return (
    <div>
      <el-h-stack padding={PaddingSize.LARGE}>
        <Swatch color="oklch(30% 0.03 240)"/>
        <Swatch color="oklch(65% 0.14 240)"/>
        <Swatch color="oklch(95% 0.01 240)"/>
        <Swatch color="oklch(85% 0.19 85)"/>
        <Swatch color="oklch(70% 0.19 55)"/>
      </el-h-stack>
      <el-h-stack padding={PaddingSize.LARGE}>
        <Blend from="oklch(30% 0.03 240)" to="#000"/>
        <Blend from="oklch(65% 0.14 240)" to="#000"/>
        <Blend from="oklch(95% 0.01 240)" to="#000"/>
        <Blend from="oklch(85% 0.19 85)" to="#000"/>
        <Blend from="oklch(70% 0.19 55)" to="#000"/>
      </el-h-stack>
      <el-h-stack padding={PaddingSize.LARGE}>
        <Blend from="oklch(30% 0.03 240)"/>
        <Blend from="oklch(65% 0.14 240)"/>
        <Blend from="oklch(95% 0.01 240)"/>
        <Blend from="oklch(85% 0.19 85)"/>
        <Blend from="oklch(70% 0.19 55)"/>
      </el-h-stack>



      {/* <div>
        <Swatch color="oklch(50% 0.21 25)"/>
        <Swatch color="oklch(70% 0.19 55)"/>
        <Swatch color="oklch(85% 0.19 85)"/>
        <Swatch color="oklch(85% 0.21 115)"/>
        <Swatch color="oklch(85% 0.35 145)"/>
        <Swatch color="oklch(85% 0.19 175)"/>
        <Swatch color="oklch(80% 0.18 205)"/>

      </div> */}


      {/* <div style={{width: "600px"}}>
        {degs.map(deg => (
          <Hue hue={deg}/>
        ))}
      </div> */}


    </div>
  );
}

export default ColorsPage;
