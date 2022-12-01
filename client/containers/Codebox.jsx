import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { javascript } from "@codemirror/lang-javascript";



function Codebox() {
    // const messages = useSelector(state => state.messages)
    return (
        <div className="codebox">
            <CodeMirror
            value='code'
            height="95%"
            theme={okaidia}
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