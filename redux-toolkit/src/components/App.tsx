import React from 'react';
// Хуки находятся в react-redux
import { useSelector, useDispatch } from 'react-redux';
// Импортируем нужные действия
import { decrement, increment } from '../slices/counterSlice'
import {RootState} from "../slices";

const App = () => {

  // Вытаскиваем данные из хранилища. state – все состояние
  const count = useSelector((state: RootState) => state.counter.value);
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useDispatch();

  return (
      <div>
        <div>
          <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
          >
            Прибавить
          </button>
          <span>{count}</span>
          <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
          >
            Отнять
          </button>
        </div>
      </div>
  );
}

export default App;
