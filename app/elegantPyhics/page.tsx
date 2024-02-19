import React from 'react';
import Post from '../_Components/Post';
import { text7, text8 } from '../_Texts/programmist';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
      <Post title='Лабораторные работы по физике' text={text7} />
      <Post
        title='Возможность студентов через выполнение лабораторных работ по физике'
        text={text8}
      />
    </div>
  );
};

export default Page;
