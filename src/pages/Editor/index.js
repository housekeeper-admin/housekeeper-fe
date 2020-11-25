import React, { Fragment, useState } from "react";
import { PageHeader } from "antd";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";
import { useHistory } from "react-router-dom";
export default function Communication() {
  const [content, setcontent] = useState(BraftEditor.createEditorState(""));
  const [title, settitle] = useState("未命名");
  const handleChange = (content) => {
    let node = JSON.parse(content.toRAW());
    settitle(node?node.blocks[0].text === ""?"未命名":node.blocks[0].text:"未命名" );
    setcontent(content.toHTML());
  };
  const history = useHistory();
  const handleHTMLChange = (html) => {
    console.log(html);
  };
  const editorProps = {
    height: 500,
    value: content,
    onChange: handleChange,
    onHTMLChange: handleHTMLChange,
    placeholder: "写点有趣的东西吧~"
  };
  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        onBack={() => (history.push("/home/person"))}
        title={title}
        subTitle={React.$storage.get({key: "user"}) || "Lucy"}
        style={{
          border:"1px solid #000",
          marginBottom: "6px"
        }}
      />
      <BraftEditor style={{
        border: "1px solid #000",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "2px 2px 3px #aaa"
      }} {...editorProps} />
    </Fragment>
  );
}