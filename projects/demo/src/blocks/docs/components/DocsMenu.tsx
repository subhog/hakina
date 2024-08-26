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

export const DocsMenu = (props: Props) => {
  return (
    <Menu
      style={{"height": "100%"}}
    >
      <el-v-stack
        padding={PaddingSize.MEDIUM}
        gap={PaddingSize.MEDIUM}
      >
        <img
          src="/hakinaAlphaDark.png"
          style={{
            width: "50%"
          }}
        />
        <div>HAKINA</div>
        <div>web components</div>
      </el-v-stack>
      
      <MenuGroup>
      </MenuGroup>
      <MenuGroup
        title="Usage"
        href="/docs/body"
      >
      </MenuGroup>
      

      {/* 

      <MenuGroup title="Layout">
        <MenuItem
          href="/layout"
        >
          •••
        </MenuItem>
      </MenuGroup>
      */}
      
      <MenuGroup
        title="Composition"
        href="/docs/composition"
      >
        <MenuItem href="/docs/composition#stack">Stack</MenuItem>
        <MenuItem href="/docs/composition#separator">Separator</MenuItem>
        <MenuItem href="/docs/composition#padded">Padded</MenuItem>
        <MenuItem href="/docs/composition#centered">Centered</MenuItem>
        <MenuItem href="/docs/composition#props">Composition props</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Static"
        href="/docs/static"
      >
        <MenuItem href="/docs/static#label">Label</MenuItem>
        <MenuItem href="/docs/static#spinner">Spinner</MenuItem>
        <MenuItem href="/docs/static#divider">Divider</MenuItem>
        <MenuItem href="/docs/static#icons">Icons</MenuItem>
        <MenuItem href="/docs/static#tbd">TBD</MenuItem>
        <MenuItem href="/docs/static#typography">Typography</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Action"
        href="/action"
      >
        <MenuItem href="/docs/action#button">Button</MenuItem>
        <MenuItem href="/docs/action#dropdown">Dropdown</MenuItem>
        <MenuItem href="/docs/action#tabs">Tabs</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Data controls"
        href="/control"
      >
        <MenuItem href="/docs/control#input">Input</MenuItem>
        <MenuItem href="/docs/control#code">Code input</MenuItem>
        <MenuItem href="/docs/action#toggle">Toggle</MenuItem>
        <MenuItem href="/docs/control#choice">Choice</MenuItem>
        <MenuItem href="/docs/control#select">Select</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Data display"
        href="/display"
      >
        <MenuItem href="/docs/display#value">Value</MenuItem>
        <MenuItem href="/docs/display#tag">Tag</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Part"
        href="/part"
      >
        <MenuItem href="/docs/part#feed">Feed</MenuItem>
        <MenuItem href="/docs/part#menu">Menu</MenuItem>
        <MenuItem href="/docs/part#modal">Modal</MenuItem>
        <MenuItem href="/docs/part#demo">Demo</MenuItem>
      </MenuGroup>

      <MenuGroup
        title="Theme"
        href="/theme"
      >
        <MenuItem href="/docs/theme#colors">Colors</MenuItem>
        <MenuItem href="/docs/theme#fonts">Fonts</MenuItem>
      </MenuGroup>

      <el-stack-separator padding={PaddingSize.LARGEST}/>
      <el-h-stack>
        <img
          src="/hakinaAlphaDark.png"
          style={{
            width: "25%",
            filter: "grayscale(100%)",
            "mix-blend-mode": "soft-light",
            // "mix-blend-mode": "luminosity",
            // opacity: "50%",
          }}
        />  
      </el-h-stack>
      <el-h-stack padding={PaddingSize.LARGEST}>&nbsp;</el-h-stack>
    </Menu>
  );
}

export default DocsMenu;
