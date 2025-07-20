import React, { useState } from 'react';
import axios from 'axios';

const CSVUploader = ({onUploadSuccess}) => {
    const [file, setFile] = useState(null); //holds uploaded file
    const [jsonData, setJsonData] = useState(null); //holds returned JSON from backend

    //triggers when user selects a file and stores the fil in store
    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!file){
            alert('Please select a CSV file');
            return;
        }

        //FormData is needed miltipart/form-data when uploading files via HTTP
        const formData = new FormData();
        formData.append('file',file);

        //send the file to the backend route api/upload using POST
        try{
            const response = await axios.post('http://localhost:3000/api/upload', formData, {
                headers:{
                    'Content-Type': 'multipart/form-data',
                },
            });

            setJsonData(response.data);//this is optional ,you can use this to show added msg on UI

            //triggers the refresh in App
            if(onUploadSuccess){
                onUploadSuccess();
            }

        }catch(error){
            console.error('Upload failed: ',error);
            alert('Faled to upload CSV');
        }
    }

  return (
    //file is only accepted if it ends in .csv
    <div style={{padding:'20px', textAlign:"center"}}>
        <h2>Upload CSV File</h2>
        <form action="" onSubmit={handleSubmit} style={{
            border: "1px solid #ccc",
            boxShadow:"0 2px 3px 4px rgba(73, 85, 97, 0.1)",
            borderRadius:"20px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            width:"300px",
            height:"150px",
            justifyContent: "space-between",
            gap:"10px",
            margin:"0 auto"

        }}>
            <label htmlFor="file" style={{fontWeight:"500"}}>Choose a File</label>
            <input type="file" id='file' name='file' accept='.csv' onChange={handleFileChange} style={{
                border:"1px solid #ccc",
                padding:"10px",
                borderRadius:"10px",
                cursor:"pointer"
            }}/>
            <button type='submit' style={{
                padding:"10px 20px",
                width:"120px",
                margin:"0 auto",
                border:"1px solid white",
                backgroundColor: "rgba(43, 136, 223, 0.79)",
                borderRadius:"20px",
                fontSize:"18px",
                cursor:"pointer"
            }}>Upload</button>
        </form>

        {/* {jsonData && (
            <div style={{marginTop: '20px'}}>
                <h3>CSV Data (JSON):</h3>
                <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </div>
        )} */}
    </div>
  )
}

export default CSVUploader