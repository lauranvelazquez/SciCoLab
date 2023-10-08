import 'quill/dist/quill.snow.css';
import {useQuill} from 'react-quilljs'
import { useState,useEffect } from 'react';
import toolbar from './toolbar';
import React from 'react';
import AppBarWithDrawer from './AppBar';
import Button from '@mui/material/Button';
// import axios from "axios"; 
function NuevoP(){
    const { quill, quillRef } = useQuill(
        {
            module:{
              toolbar:toolbar
            }
          }
      );
    // const savenuevoproyecto = () =>{
    //     // fetch.get('localhost:3002/api/test').then(res => console.log(res))

    //     console.log("AAAAAAAAAAAa")
    // }
    useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            // console.log('Text change!');
            // console.log(quill.getText()); // Get text only
            // console.log(quill.getContents()); // Get delta contents
            console.log(quill.root.innerHTML); // Get innerHTML using quill
            // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
            // console.log(quill)
          });
        }
      }, [quill]);
 return(
    <div className='divCentral'>
        <AppBarWithDrawer/>
        <div className='divEditor' ref={quillRef}> </div>
        {/* <div>
            <Button onClick={()=>{ console.log("AAAAAAAAAAAa")}}>GUARDAR</Button>
        </div> */}
    </div>
 )
}

export default NuevoP;