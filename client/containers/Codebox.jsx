import React, { useState } from "react";
import { useSelector } from "react-redux";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { okaidia } from '@uiw/codemirror-theme-okaidia';

//const Interpreter = require('js-interpreter');
// import Sandbox from 'sandbox';
// var sandbox = new Sandbox();
//import CaptureOutput from '@joegesualdo/capture-output-node';

// my CSS
//import styles from './codeStyle.css'; 

// JS PLAYGROUND
import Playground from 'javascript-playgrounds'

const client = new WebSocket('ws://localhost:3002');



function Codebox() {

    const codeContent = useSelector(state => state.code.code);

    let [cReadout, updateConsole] = useState('default');

    function sendCodeContent(code) {
        console.log(code);
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

    function runCode(event) {
        event.preventDefault();
        let codeString = codeContent.trim();
        codeString = `
            // Your code here
            let a = 3;
            a += 3;
            a;
        `


        updateConsole('HI ME!');
    }

    const parameters = { code: `console.log('Hello, world!')` }
    const hashString = '#data=' + encodeURIComponent(JSON.stringify(parameters))

    // const messages = useSelector(state => state.messages)
    return (
        <div className="codebox">
            {/* code */}
            <Playground onChange={sendCodeContent} className='PG_BOX' code={codeContent} style={{ width: '100%', height: '97%', dispaly: 'flex', div: { border: '5px solid', flexDirection: 'column'} }} platform='web' panes={[
                // { type: 'parent', platform: 'web', style: { backgroundColor: 'blue', width: '100%', flexDirection: 'column', border: '5px solid' }},
                { type: 'editor', platform: 'web', console: {showLineNumber: true}, style: { backgroundColor: 'green', width: '100%', flexDirection: 'column' }},
                { type: 'player', platform: 'web', style: { backgroundColor: 'pink', width: 0, dispaly: 'none !important' }}]}
            />
            {/* <CodeMirror onChange={sendCodeContent}
            value={codeContent}
            height="65%"
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

            <br></br>
            <button className="runCode" onClick={runCode}>run</button>
            <br></br><br></br> */}

            {/* output */}
            {/* <CodeMirror
            value={cReadout}
            height="20%"
            theme={okaidia}
            extensions={[javascript({ jsx: true })]}
            //onChange={onChange}
            //readOnly="nocursor"
            basicSetup={{
            lineNumbers: false,
            foldGutter: false,
            highlightActiveLine: false,
            }}
            /> */}
            
            {/* panes: [
        'editor',
        { type: 'player', platform: 'android', modules: ['moment'] },
      ], */}



            {/* <Playground className='PG_BOX' style={{styles}} platform='web' panes={[ */}

            {/* <Playground className='PG_BOX' style={{ width: '100%', height: 500, dispaly: 'flex', div: { border: '5px solid', flexDirection: 'column'} }} platform='web' panes={[
                // { type: 'parent', platform: 'web', style: { backgroundColor: 'blue', width: '100%', flexDirection: 'column', border: '5px solid' }},
                { type: 'editor', platform: 'web', console: {showLineNumber: true}, style: { backgroundColor: 'green', width: '100%', flexDirection: 'column' }},
                { type: 'console', platform: 'web', style: {  backgroundColor: 'red', width: '100%', flexDirection: 'column'}},
                { type: 'player', platform: 'web', style: { backgroundColor: 'pink', width: 0, dispaly: 'none !important' }}]}
            /> */}
        </div>
    )
}

export default Codebox;