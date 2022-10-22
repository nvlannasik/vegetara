import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@material-ui/core/Button";
import CloseIcon from "@mui/icons-material/Close";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "black",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "black",
  transition: "border .3s ease-in-out",
};
const baseStyleFileName = {
  display: "flex",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "black",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "black",
  transition: "border .3s ease-in-out",
  justifyContent: 'space-between',
};

const activeStyle = {
  borderColor: "#000",
};

const acceptStyle = {
  borderColor: "#17827B",
};

const rejectStyle = {
  display: "flex",
  justifyContent: 'space-between',
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#DE1B1B",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "black",
  transition: "border .3s ease-in-out",
};

export default function DragAndDrop(props) {
  const { onChange, acceptFiles, uploadType, hintError} = props;
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    onChange(acceptedFiles[0]);
  }, [setFile, onChange]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: acceptFiles,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragAccept, isDragReject]
  );


  return (
    <>
      
        
        <div
          {...getRootProps({
            style: {
              ...style,
              ...(hintError !== undefined && rejectStyle),
              ...(hintError === undefined && activeStyle),
            },
          })}
        >
        
          <input {...getInputProps()} />
        <div styles={{ fontSize: 14 }}>
          {file ? (<div><img src={URL.createObjectURL(file)} alt="preview" style={{ height: "30px", width: "30px" }} /> <b>{`+ Ganti foto ${uploadType}`}</b></div>) : (<b>{`+ Tambahkan Foto ${uploadType}`}</b>)}
            
          </div>
        </div>
    </>
  );
}

DragAndDrop.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  hinterror: PropTypes.string,
  acceptFiles: PropTypes.string,
  uploadType: PropTypes.string,
};

DragAndDrop.defaultProps = {
  onChange: () => null,
  hint: "",
  hinterror: "",
  acceptFiles: "",
  uploadType: "",
};
