import React, { useState, useCallback, useEffect, useRef } from 'react';

import View from './Add-new-pizza.view';
import GET from '../../utils/api-comunication/get';

const Home: React.FunctionComponent = (p) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectetImage, setSelectedImage] = useState<string | null>(null);
  const [isSelectImageContainerOpen, setSelectImageContainerOpen] = useState<
    boolean
  >(false);

  const [nameRef, ingredientsRef, priceRef] = [
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleImageSelectContainer = useCallback(() => {
    setSelectImageContainerOpen(!isSelectImageContainerOpen);
  }, [isSelectImageContainerOpen]);

  const handleSelectImage = useCallback((selectedImage: string) => {
    setSelectedImage(selectedImage);
    setSelectImageContainerOpen(false);
  }, []);

  const getImages = useCallback(async () => {
    const data: any = await GET('/images');
    setImages(data.pizzas);
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  return View({
    state: { selectetImage, isSelectImageContainerOpen, images },
    handlers: { handleImageSelectContainer, handleSelectImage },
    refs: { name: nameRef, ingredients: ingredientsRef, price: priceRef },
  });
};

export default Home;
