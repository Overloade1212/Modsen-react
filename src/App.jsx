import React from 'react';
import Task1Form from './Module1/task1/Task1Form'; 
import TextSpoiler from './Module1/task2/TextSpoiler'; 

function App() {
  const sampleText = "Это первое предложение. Вот второе предложение практической работы. А это уже третье предложение. И последнее четвертое предложение.";

  return (
    <>
      <Task1Form />
      <hr />
      <TextSpoiler text={sampleText} />
    </>
  );
}

export default App;
