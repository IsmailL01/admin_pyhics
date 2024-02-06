import React from 'react';
import Post from '../_Components/Post';
import { text4 } from '../_Texts/programmist';

const Page = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
        <Post text={text4} title='Предоставление общей информации о физике' />
      </div>
    </div>
  );
};

export default Page;
