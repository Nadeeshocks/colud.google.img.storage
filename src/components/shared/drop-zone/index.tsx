import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Divider } from '../divider';
import { Upload } from '../upload';

import { Colors } from '../../../lib/style-guide';
import { FontSizes } from '../../../lib/style-guide';
import { UI } from '../../../lib/style-guide';
import { randomClassName } from '../../../lib/rcn'

const rcn = randomClassName()

type State = {
  dragging: boolean;
  reader?: string;
  file: File | null;
}

const initialState = {
  dragging : false,
  reader: "",
  file: null
}

const Dropzone: FC = ({ className }) => {

  const [state, setstate] = useState<State>(initialState);
  let fileUploaderInput = useRef<HTMLInputElement | null>(null);

  let dragEventCounter = 0;
  const dragenterListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter++;
    setstate(state => ({
      ...state,
      dragging: true
    }));
  };

  const dragleaveListener = (event: React.DragEvent<HTMLDivElement>) => {
    overrideEventDefaults(event);
    dragEventCounter--;
    setstate(state => ({
      ...state,
      // dragging: false
    }));
  };

  const dropListener = (event: React.DragEvent<HTMLDivElement>) => {
    event.persist();
    overrideEventDefaults(event);
    dragEventCounter = 0;

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setstate(state => ({
        ...state,
        file: event.dataTransfer.files[0]
      }));
      
      let fileReader = new FileReader();

      fileReader.onload = (event) => {
        setstate(state => ({
          ...state,
          // dragging: false,
          reader: fileReader.result,
        }));
      }
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const overrideEventDefaults = (event: Event | React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onSelectFileClick = () => {
    fileUploaderInput && fileUploaderInput.current.click();
  };

  const onFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    if (event.target.files && event.target.files[0]) {
      let fileReader = new FileReader();

      setstate(state => ({
        ...state,
        file: event.target.files[0]
      }));

      fileReader.onload = (event) => {
        const reader = event.target.result;

        setstate(state => ({
          ...state,
          reader: reader,
        }));
      }
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };
  useEffect(() => {
    window.addEventListener("dragover", (event: Event) => {
      overrideEventDefaults(event);
    });
    window.addEventListener("drop", (event: Event) => {
      overrideEventDefaults(event);
    });
  }, []);


  return (
    <div className={className}>
      <Header>
        <h2 className={rcn('title')}>Company Logo</h2>
        <p className={rcn('sub-title')}>
          Logo should be square, 100px size and in png, jpeg file format.
        </p>
      </Header>
      <Divider />
      <Upload
        dragging={state.dragging}
        file={state.file}
        imgsrc={state.reader}
        onSelectFileClick={onSelectFileClick}
        onDragEnter={dragenterListener}
        onDragLeave={dragleaveListener}
        onDrop={dropListener}>
        <input
          ref={fileUploaderInput}
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={onFileChanged}
          className={'file-upload-input'}
        />
      </Upload>

    </div>
  )
}
const StyledDropzone = styled(Dropzone)`
  position : relative;
  height: 590px;
  width : 400px;
  background: ${Colors.PureWhite};
  ${UI.BORDER};
  box-sizing: border-box;
`
const Header = styled('div')`
  padding : 20px;
  .${rcn('title')} {
    font-style: normal;
    font-weight: bold;
    ${FontSizes.large};
    line-height: 25px;
  }
  
  .${rcn('sub-title')} {
    ${FontSizes.medium};
    color : ${Colors.TX3};
    line-height: 20px;
    letter-spacing: 0.4px;
  }
  .${rcn('file-upload-input')}{
    visibility : hidden;
    position : absolute;
    top :0;
    bottom : 0;
    left : 0;
    right :0;
    width : 100%;
  }
`

export { StyledDropzone as Dropzone };
