'use client';
import React, { useCallback } from 'react';

const Button = ({ codeText }: { codeText: string }) => {
  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(codeText);
  }, [codeText]);

  return <button onClick={onCopy}>Копировать</button>;
};

export default Button;
