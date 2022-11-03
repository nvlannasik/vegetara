import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const baseStyle = (type = '') => {
  let style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
  };
  if (type === 'pakta') style = { ...style, backgroundColor: '#EEEEEE', borderColor: '#757575', borderWidth: 1 };
  if (type === 'nilai-akhir') style = { ...style, backgroundColor: '#EEEEEE', borderColor: '#757575', borderWidth: 1, paddingTop: 68, paddingBottom: 54 };
  return style;
};

const activeStyle = {
  borderColor: '#17827B',
};

const acceptStyle = {
  borderColor: '#17827B'
};

const rejectStyle = {
  borderColor: '#DE1B1B'
};

const renderIcon = (type, classes) => {
  if (type.includes('.pdf') && type.includes('.jpg')) return <FileUploadIcon/>;
  switch (type) {
    case '.pdf':
      return <FileUploadIcon />;
    case '.jpg':
      return <FileUploadIcon />;
    case '.png':
      return <FileUploadIcon />;
    case '.png,.jpg,.jpeg':
      return <FileUploadIcon />;
    case 'pakta':
    case 'nilai-akhir':
      return <FileUploadIcon />;
    default:
      return null;
  }
};

const getMimeType = {
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpg,.pdf': 'image/jpeg, application/pdf',
  'pakta': 'image/png,image/jpeg,application/pdf',
  '.pdf,.jpg,.jpeg,.png': 'image/jpeg, image/jpg, image/png, application/pdf',
  'nilai-akhir': 'application/pdf',
  '.png,.jpg,.jpeg': 'image/jpeg, image/jpg, image/png',
};

export default function DragAndDrop(props) {
  const {
    classes,
    onChange,
    acceptFiles,
    disabled,
    icon,
    text,
    hint,
    hintError,
    name
  } = props;
  const onDrop = useCallback(acceptedFiles => {
    onChange(acceptedFiles[0]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: getMimeType[acceptFiles] || '',
  });

  const style = useMemo(() => ({
    ...baseStyle(acceptFiles),
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  const disableStyle = {
    cursor: 'not-allowed',
    backgroundColor: '#EEEEEE',
    borderColor: '#BDBDBD',
    color: '#BDBDBD'
  };

  return (
    <div {...getRootProps({
      style: {
        ...style,
        ...(disabled && disableStyle),
        ...(hintError && rejectStyle)
      }
    })}>
      <input {...getInputProps()} disabled={disabled} />
      {icon && renderIcon(acceptFiles, classes)}
      <div className={clsx(classes.textWrapper, text)}>
        <div className="text">
          {text === 'upload-nilai-akhir' ? (
            <>
              <p><u>Pilih</u> atau seret dan letakkan file "Nilai Akhir” participant di sini</p>
            </>
          ) : (
            <div>
              {acceptFiles === '.png,.jpg,.jpeg' ? (
                <p className="three"><u>Pilih</u> atau seret dan letakkan <br /> {['.pdf', 'pakta'].includes(acceptFiles) && 'file '}{name && (`${name}`)} {text && (`"${text}"`)} Anda di sini</p>
              ) : (
                <p><u>Pilih</u> atau seret dan letakkan <br /> {['.pdf', 'pakta'].includes(acceptFiles) && 'file '} {text && (`"${text}"`)} Kamu di sini</p>
              )}
            </div>
          )}
        </div>
        {(hint || hintError) && <p className={clsx('hint', { 'error': hintError, 'pdf': acceptFiles === '.pdf', 'png': acceptFiles === '.png', 'jpg': acceptFiles === '.jpg', 'one-line-error': acceptFiles === '.png,.jpg,.jpeg' && hintError })}>{hintError || hint}</p>}
      </div >
    </div >
  );
}

DragAndDrop.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  hint: PropTypes.string,
  hintError: PropTypes.string,
  acceptFiles: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.string,
  image: PropTypes.node,
  name: PropTypes.string
};

DragAndDrop.defaultProps = {
  onChange: () => null,
  hint: '',
  hintError: '',
  acceptFiles: '',
  disabled: false,
  icon: false,
  text: '',
  image: null,
  name: ''
};
