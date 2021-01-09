import React, { useState, useCallback, useEffect, useRef } from 'react';

import View from './Add-new-pizza.view';
import GET from '../../utils/api-comunication/get';
import POST from '../../utils/api-comunication/post';

const Home: React.FunctionComponent = (p) => {
  const [images, setImages] = useState<string[]>([]);
  const [selectetImage, setSelectedImage] = useState<string | null>(null);
  const [isSelectImageContainerOpen, setSelectImageContainerOpen] = useState<
    boolean
  >(false);
  const [isLoading, setLoading] = useState<boolean>(false);

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

  const handleSubmitButton = useCallback(async () => {
    setLoading(true);
    if (nameRef.current.value === '') {
      setLoading(false);
      alert('enter pizza name');
    } else if (ingredientsRef.current.value === '') {
      setLoading(false);
      alert('enter pizza ingredinents');
    } else if (!parseInt(priceRef.current.value)) {
      setLoading(false);
      alert('price must be a number');
    } else if (!selectetImage) {
      setLoading(false);
      alert('the pizza image must be setted');
    } else {
      try {
        const data = await POST('/panel/add-pizza', {
          name: nameRef.current.value,
          ingredients: ingredientsRef.current.value.split(','),
          price: priceRef.current.value,
          image: selectetImage,
        });
        if (data.status === 'ok') {
          alert(`added new pizza ${nameRef.current.value}`);
          setSelectedImage(null);
          nameRef.current.value = '';
          ingredientsRef.current.value = '';
          priceRef.current.value = '';
          setLoading(false);
        } else
          throw new Error(
            'could not add new pizza - check your internet connection'
          );
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    }
  }, [nameRef, ingredientsRef, priceRef]);

  const getImages = useCallback(async () => {
    const data: any = await GET('/images');
    setImages(data.pizzas);
  }, []);

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    console.log(nameRef);
  }, [nameRef.current]);

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
