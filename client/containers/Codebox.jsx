import React from "react";
import { useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const client = new WebSocket('ws://localhost:3002');



function Codebox() {

    const codeContent = useSelector(state => state.code.code);

    function sendCodeContent(code) {
        // ignore changes that are simply updtes to the state
        if (code === codeContent) return;

        console.log('code content being sent');
        const messageObj = {
            type: 'code',
            body: code
        }
        console.log('sending messageObj: ', messageObj);
        client.send(JSON.stringify(messageObj));
      }

    // const messages = useSelector(state => state.messages)
    return (
        <div className="codebox">
            <CodeMirror onChange={sendCodeContent}
            value={codeContent}
            height="95%"
            // theme={okaidia}
            extensions={[javascript({ jsx: true })]}
            //onChange={onChange}
            // readOnly="nocursor"
            basicSetup={{
            //lineNumbers: false,
            //foldGutter: false,
            highlightActiveLine: false,
            }}
            />
        </div>
    )
}

export default Codebox;