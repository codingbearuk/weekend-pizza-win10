import React from 'react';
import { TextInput, Button, ProgressCircle } from 'react-desktop/windows';

import { Container, Content, Image } from './Add-new-sauce.styles';
import { yellow, black, white } from '../../constants/colors';
import key from '../../utils/api-comunication/key';
import ImagePicker from '../UI/Image-picker';

interface ViewType {
  state: {
    selectetImage: string | null;
    isSelectImageContainerOpen: boolean;
    images: string[];
    isLoading: boolean;
  };
  handlers: {
    handleImageSelectContainer: VoidFunction;
    handleSelectImage: (selectedImage: string) => void;
    handleSubmitButton: () => void;
  };
  refs: {
    name: React.Ref<HTMLDivElement>;
    ingredients: React.Ref<HTMLDivElement>;
    price: React.Ref<HTMLDivElement>;
  };
}

const View: React.FunctionComponent<ViewType> = (p) => {
  return (
    <Container>
      <h1>Add new sauce</h1>
      <Content>
        <Image
          src={
            p.state.selectetImage
              ? `${key}/images/sauces/${p.state.selectetImage}`
              : `${key}/images/sauces/sauce-bbc@2x.png`
          }
          isSelected={p.state.selectetImage ? true : false}
          onClick={p.handlers.handleImageSelectContainer}
        />
        {p.state.isSelectImageContainerOpen && (
          <ImagePicker
            images={p.state.images}
            callback={p.handlers.handleSelectImage}
            mode="sauces"
          />
        )}
        <TextInput
          label="Sauce name"
          placeholder="my new sauce"
          color={yellow}
          ref={p.refs.name}
          theme={
            window.matchMedia('(prefers-color-scheme:dark)').matches
              ? 'dark'
              : 'light'
          }
        />
        <TextInput
          label="Sauce description"
          placeholder="enter your new sauce description"
          color={yellow}
          ref={p.refs.ingredients}
          theme={
            window.matchMedia('(prefers-color-scheme:dark)').matches
              ? 'dark'
              : 'light'
          }
        />
        <TextInput
          label="Price"
          placeholder="enter your sauce price"
          color={yellow}
          ref={p.refs.price}
          theme={
            window.matchMedia('(prefers-color-scheme:dark)').matches
              ? 'dark'
              : 'light'
          }
        />
        {p.state.isLoading ? (
          <ProgressCircle color={yellow} size={40} />
        ) : (
          <Button onClick={p.handlers.handleSubmitButton}>Submit</Button>
        )}
      </Content>
    </Container>
  );
};

export default View;
