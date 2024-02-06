import React from 'react';
import Post from '../_Components/Post';
import { text, text1, text2, text3 } from '../_Texts/programmist';

const Page = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5 justify-center items-center'>
      <Post
        text={text}
        title='Проблемы с позвоночником: остеохондроз и нарушения осанки.'
      />
      <Post
        text={text1}
        title='Снижение зрения у IT-специалистов является довольно распространенной проблемой, связанной с особенностями их работы.'
      />
      <Post
        text={text2}
        title='Головная боль напряжения является одной из самых распространенных форм головной боли, которая часто встречается у IT-специалистов.'
      />
      <Post
        text={text3}
        title='Гиподинамия - это состояние, характеризующееся недостаточной физической активностью или двигательной активностью в организме.'
      />
    </div>
  );
};

export default Page;
