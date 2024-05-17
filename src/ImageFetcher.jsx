import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const ImageFetcher = ({ url, className }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
        const $ = cheerio.load(data);
        const imgElement = $(`img.${className}`);
        const src = imgElement.attr('src');
        setImageUrl(src);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [url, className]);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Fetched from website" />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default ImageFetcher;
