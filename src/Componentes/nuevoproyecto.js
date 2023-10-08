import 'quill/dist/quill.snow.css';
import {useQuill} from 'react-quilljs'
import { useState,useEffect } from 'react';
import toolbar from './toolbar';
import React from 'react';
import AppBarWithDrawer from './AppBar';

function NuevoP(){
    const { quill, quillRef } = useQuill(
        {
            module:{
              toolbar:toolbar
            }
          }
      );
    
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
    </div>
 )
}

export default NuevoP;