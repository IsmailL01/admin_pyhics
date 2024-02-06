import React from 'react';
import Post from '../_Components/Post';
import { text, text1, text2, text3 } from '../_Texts/programmist';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
      <Post text={text} />
      <Post text={text1} />
      <Post text={text2} />
      <Post text={text3} />
    </div>
  );
};

export default Page;
