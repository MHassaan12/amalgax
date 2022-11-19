import React from 'react'
import { useDropzone } from 'react-dropzone';

const DropZone = ({onDrop}) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <p className="dropzone-content">
          Drag’n’drop some files here, or click to select files
        </p>
      </div>
    </div>
  )
}

export default DropZone;