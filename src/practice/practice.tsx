import { useState } from "react";

export const Practice = () => {
  let plus = [1, 2, 3];
  const calcTotal = (num: number) => {
    const total = plus * num;
    setOne(total);

    const [one, setOne] = useState<Array<number>>([]);
  };

  const onClickTotal = () => calcTotal(5);

  return (
    <div>
      <p>練習問題</p>
      <button onClick={onClickTotal}>計算</button>
      <p>{`${one}`}</p>
    </div>
  );
};
