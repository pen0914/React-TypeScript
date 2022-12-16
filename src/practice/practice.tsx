export const Practice = () => {
  const calcTotal = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickTotal = () => calcTotal(1000);

  return (
    <div>
      <p>練習問題</p>
      <button onClick={onClickTotal}>計算</button>
    </div>
  );
};
