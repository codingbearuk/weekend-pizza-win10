import React from 'react';
import { useDropzone } from 'react-dropzone';
import { Icon } from '@fluentui/react/lib/Icon';
import { Button, ProgressCircle } from 'react-desktop/windows';

import {
  Container,
  DropArea,
  FileDescription,
  Alert,
  ButtonInside,
  circleColor,
} from './SauceUpload.styles';
import { FileInfo } from './SauceUpload.t';
import Separator from '../UI/Separator';

interface ViewType {
  state: {
    isDroped: boolean;
    fileInfo: FileInfo;
    fileTypeAlert: boolean;
    fileSizeAlert: boolean;
    isLoading: boolean;
  };
  handlers: {
    handleOnDrop: (files: Array<File>) => void;
    handleUploadFile: VoidFunction;
  };
}

const View: React.FunctionComponent<ViewType> = (p) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: p.handlers.handleOnDrop,
  });

  return (
    <Container>
      <h1>Sauce image upload</h1>
      <DropArea
        {...getRootProps()}
        isActive={isDragActive}
        isDroped={p.state.isDroped}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>
            <Icon iconName="DoubleChevronDown" /> Drop the file here ...
          </p>
        ) : p.state.isDroped ? (
          <p>
            <Icon iconName="CompletedSolid" /> Your file has been added
            correctly
          </p>
        ) : (
          <p>
            <Icon iconName="Installation" /> Drag 'n' drop your file here, or
            click to select
          </p>
        )}
      </DropArea>
      {p.state.isDroped && (
        <FileDescription>
          <img src={p.state.fileInfo.path} />
          <p>
            <strong>name:</strong> {p.state.fileInfo.name}
          </p>
          <p>
            <strong>type:</strong> {p.state.fileInfo.type}
          </p>
          <p>
            <strong>size:</strong> {p.state.fileInfo.size}
          </p>
          <p>
            <strong>path:</strong> {p.state.fileInfo.path}
          </p>
        </FileDescription>
      )}
      {p.state.fileSizeAlert && (
        <Alert>
          <Icon iconName="AlertSolid" /> file size id too big
        </Alert>
      )}
      {p.state.fileTypeAlert && (
        <Alert>
          <Icon iconName="AlertSolid" /> file must be the *.png image
        </Alert>
      )}
      {p.state.isDroped && (
        <>
          <Separator height={100} />{' '}
          {p.state.isLoading ? (
            <ProgressCircle color={circleColor} size={50} />
          ) : (
            <Button push onClick={p.handlers.handleUploadFile}>
              <ButtonInside>
                <Icon iconName="CloudUpload" />
                upload the image
              </ButtonInside>
            </Button>
          )}
        </>
      )}
    </Container>
  );
};

export default View;
