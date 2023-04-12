import React from 'react';
import * as XLSX from "xlsx";

const parseExcel = (props) => {

    const handleFile = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data)
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        
        // Makes the first array contain all headers and the rest of the arrays have the values
        const fileFull = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: "",
        } )

        console.log(fileFull)
        props.importHeader(fileFull[0])
        const fileBody = fileFull.map((item) => item)
        fileBody.shift()
        props.importBody(fileBody)

    }

    return (
        <div>    
            <input type="file" onChange={(e) => handleFile(e)} />
            {props.fileName && (
                <p className="import_file">FileName: <span>{props.fileName}</span></p>
            )}
        </div>
    )
}

export default parseExcel;