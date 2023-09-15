import logo from "./logo.svg";
import "./App.css";
import { Button, Input, Radio, Checkbox, Space } from "antd";

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <Button>Default</Button>

      <Input placeholder="Please Input" />
      <Button type="primary">Submit</Button>

      <Radio.Group
        defaultValue="a"
        size="small"
        buttonStyle="solid"
        style={{ buttonSolidCheckedActiveBg: "red" }}
      >
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>

      <Checkbox>Checkbox</Checkbox>

      {/* <Radio.Group defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group> */}

      <Space.Compact>
        <Input
          addonBefore="+91"
          placeholder="Phone Number"
          rules={[{ required: true, message: "" }]}
        />
      </Space.Compact>
    </div>
  );
}

export default App;
