'use client';

import React, { useState } from 'react';
import Button from './ButtonСopy';
import ButtonShare from './ButtonShare';

function Read({ text }: { text: string }) {
  const [isBoolean, setIsBoolean] = useState(false);

  const words = text.split(' ');
  const truncatedText = words.slice(0, 100).join(' ');

  return (
    <>
      {isBoolean ? text : truncatedText}

      {isBoolean ? (
        <></>
      ) : (
        <button onClick={() => setIsBoolean(true)}>...читай дальше</button>
      )}
    </>
  );
}

const Post = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className='flex gap-5 flex-col height-[500px] w-[500px] border-solid border-zinc-100 border-4'>
      <div className='border-zinc-100 border-2'>Автор-Аноним</div>
      <div className='border-zinc-100 border-2 flex justify-end items-center gap-3'>
        Название-{title}
        <Button codeText={text} />
        <ButtonShare text={text} />
      </div>
      <p>{text.length > 100 ? <Read text={text} /> : <p>{text}</p>}</p>
    </div>
  );
};

export default Post;
