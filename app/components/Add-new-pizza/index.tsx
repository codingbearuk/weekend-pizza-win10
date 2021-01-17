import React, { useState, useCallback, useEffect, useRef } from 'react';
import { remote } from 'electron';

import View from './Add-new-pizza.view';
import GET from '../../utils/api-comunication/get';
import POST from '../../utils/api-comunication/post';

const Home: React.FunctionComponent = (p) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectetImage, setSelectedImage] = useState<string>('');
  const [isSelectImageContainerOpen, setSelectImageContainerOpen] = useState<
    boolean
  >(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [nameRef, ingredientsRef, priceRef] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const mainWindow = remote.BrowserWindow.getAllWindows[0];

  const handleImageSelectContainer = useCallback(() => {
    setSelectImageContainerOpen(!isSelectImageContainerOpen);
  }, [isSelectImageContainerOpen]);

  const handleSelectImage = useCallback((selectedImage: string) => {
    setSelectedImage(selectedImage);
    setSelectImageContainerOpen(false);
  }, []);

  const handleSubmitButton = useCallback(async () => {
    setLoading(true);
    if (nameRef.current.value === '') {
      setLoading(false);
      await remote.dialog.showMessageBox(mainWindow, {
        message: 'enter pizza name',
      });
    } else if (ingredientsRef.current.value === '') {
      setLoading(false);
      await remote.dialog.showMessageBox(mainWindow, {
        message: 'enter pizza ingredinents',
      });
    } else if (!parseInt(priceRef.current.value)) {
      setLoading(false);
      await remote.dialog.showMessageBox(mainWindow, {
        message: 'price must be a number',
      });
    } else if (selectetImage === '') {
      setLoading(false);
      console.log(selectetImage);
      await remote.dialog.showMessageBox(mainWindow, {
        message: 'the pizza image must be setted',
      });
    } else {
      try {
        const data = await POST('/panel/add-pizza', {
          name: nameRef.current.value,
          ingredients: ingredientsRef.current.value.split(','),
          price: priceRef.current.value,
          image: selectetImage,
        });
        if (data.status === 'ok') {
          await remote.dialog.showMessageBox(mainWindow, {
            message: `added new pizza ${nameRef.current.value}`,
          });
          setSelectedImage('');
          nameRef.current.value = '';
          ingredientsRef.current.value = '';
          priceRef.current.value = '';
          setLoading(false);
        } else
          throw new Error(
            'could not add new pizza - check your internet connection'
          );
      } catch (err) {
        await remote.dialog.showMessageBox(mainWindow, {
          message: err,
        });
        setLoading(false);
      }
    }
  }, [nameRef, ingredientsRef, priceRef, selectetImage]);

  const getImages = useCallback(async () => {
    const data: any = await GET('/images');
    setImages(data.pizzas);
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  return View({
    state: { selectetImage, isSelectImageContainerOpen, images, isLoading },
    handlers: {
      handleImageSelectContainer,
      handleSelectImage,
      handleSubmitButton,
    },
    refs: { name: nameRef, ingredients: ingredientsRef, price: priceRef },
  });
};

export default Home;
