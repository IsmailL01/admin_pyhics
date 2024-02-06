import React from 'react';

const Post = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className='flex gap-4 flex-col height-[500px] w-[500px]'>
      <div>Автор-Аноним</div>
      <div>Название-{text}</div>
      <p>{text}</p>
    </div>
  );
};

export default Post;
