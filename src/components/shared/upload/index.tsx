import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../lib/style-guide';
import { classNames } from '../../../lib/classnames'
import { randomClassName } from '../../../lib/rcn'

const rcn = randomClassName()

import { UploadIcon } from '../upload-icon';

type Props = {
  dragging: boolean;
  file: File | null;
  imgsrc?: string;
  onSelectFileClick: () => void;
  onDragEnter: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
};

const Upload: FC<Props> = ({
  className,
  file,
  dragging,
  imgsrc,
  onSelectFileClick,
  onDragEnter,
  onDragLeave,
  onDrop,
  children
}) => {

  let uploaderClasses = "";
  if (dragging) {
    uploaderClasses += rcn('file-uploader--dragging');
  }

  return (
    <div
      className={classNames(className, uploaderClasses)}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={onSelectFileClick}
    >
      <div className={rcn('input-container')}>
        {
          file ? <img src={imgsrc} alt="uploaded image" className={rcn("uploaded-img")}/> :
            <UploadIcon />
        }
      </div>
      <div className="text-center">
        <p className="title-a"> Drag & drop here</p>
        <p className="title-b"> - or - </p>
        <p className="title-c"> Select file to upload </p>
      </div>
      {children}
    </div>
  )
}
const StyledUpload = styled(Upload)`
  height: 79%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position : relative;

  .${rcn("file-uploader--dragging")}{
    background-color : ${Colors.BG3};
    border: 1px dashed #4991E5;
  }
  .${rcn('input-container')} {
    display: flex;
    justify-content : center;
    align-items : center;
    width: 80px;
    height: 80px;
    border-radius : 50%;
    border : 1px solid ${Colors.Border};
    margin-bottom: 10px;
  }
  .${rcn("uploaded-img")}{
    width : 100%;
    height : 100%;
    object-fit : center;
    border-radius : 50%;
  }
`
export { StyledUpload as Upload };
