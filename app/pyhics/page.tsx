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
        <Post
          text='Результаты анализа рынка и потребностей пользователей помогают разработчикам создать ценный и уникальный сайт по физике, который привлечет и удерживает пользователей. Кроме того, концептуальное представление служит основой для дальнейшего проектирования и разработки сайта. Разработчики могут использовать эту основу для создания прототипа, тестирования и доработки функций, взаимодействия и визуального оформления сайта.'
          title='Результаты анализа рынка и потребностей пользователей '
        />
      </div>
    </div>
  );
};

export default Page;
