import React, { useCallback, useState } from 'react';

import View from './SauceUpload.view';
import { FileInfo } from './SauceUpload.t';
import apiKey from '../../utils/api-comunication/key';

const Home: React.FunctionComponent = (p) => {
  const [isDroped, setDroped] = useState<boolean>(false);
  const [fileTypeAlert, setFileTypeAlert] = useState<boolean>(false);
  const [fileSizeAlert, setFileSizeAlert] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfo>({
    name: '',
    size: 0,
    type: '',
    path: '',
  });
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleOnDrop = useCallback((files: Array<File>) => {
    const image: File = files[0];
    if (image.type !== 'image/png') {
      setFileTypeAlert(true);
      setDroped(false);
    } else if (image.size > 1048576) {
      setFileSizeAlert(true);
      setDroped(false);
    } else {
      setDroped(true);
      setFileSizeAlert(false);
      setFileTypeAlert(false);
      setFileInfo({
        name: image.name,
        size: image.size,
        type: image.type,
        path: image.path,
      });
      setFileToUpload(image);
    }
  }, []);

  const handleUploadFile = useCallback(async () => {
    setLoading(true);
    try {
      const body: FormData = new FormData();
      body.append('pizzaphoto1', fileToUpload);
      console.log(body);
      const data = await fetch(`${apiKey}/upload/sauce`, {
        method: 'post',
        body,
      });
      if (data.status === 500) throw new Error('failed to upload');
      const res = await data.json();
      if (res.status === 'ok') {
        setLoading(false);
        setDroped(false);
        setFileToUpload(null);
        setFileInfo({
          name: '',
          size: 0,
          type: '',
          path: '',
        });
      }
    } catch (err) {
      console.error(err);
    }
  }, [fileToUpload]);

  return View({
    state: { isDroped, fileInfo, fileTypeAlert, fileSizeAlert, isLoading },
    handlers: {
      handleOnDrop,
      handleUploadFile,
    },
  });
};

export default Home;
