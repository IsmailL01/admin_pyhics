import React from 'react';
import Post from '../_Components/Post';
import { text4, text5 } from '../_Texts/programmist';

const Page = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
        <Post text={text4} title='Предоставление общей информации о физике' />
        <Post
          text={text5}
          title='Первым этапом веб-разработки является планирование и анализ требований.'
        />
      </div>
    </div>
  );
};

export default Page;
