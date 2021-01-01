import React from 'react';

import { Container } from './Image-picker.styles';
import key from '../../../utils/api-comunication/key';

interface ImagePickerType {
  images: Array<string>;
  callback: (selectedImage: string) => void;
  mode: keyof { pizzas: string; sauces: string };
}

const ImagePicker: React.FunctionComponent<ImagePickerType> = (p) => {
  return (
    <Container>
      {p.images.map((image) => (
        <img
          key={image}
          src={`${key}/images/${p.mode}/${image}`}
          onClick={() => p.callback(image)}
        />
      ))}
    </Container>
  );
};

export default ImagePicker;
