import React from 'react';

const Post = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className='flex gap-5 flex-col height-[500px] w-[500px]'>
      <div>Автор-Аноним</div>
      <div>Название-{title}</div>
      <p>{text}</p>
    </div>
  );
};

export default Post;
