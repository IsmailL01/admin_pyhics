import React from 'react';

const Post = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className='flex gap-5 flex-col height-[500px] w-[500px] border-solid border-zinc-100 border-4'>
      <div className='border-zinc-100 border-2'>Автор-Аноним</div>
      <div className='border-zinc-100 border-2'>Название-{title}</div>
      <p>{text}</p>
    </div>
  );
};

export default Post;
