import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { getSum } from './api';

function App() {
  const [result, setResult] = useState<string>("")
  const [data, setData] = useState<any>({ firstNumber: 0, secondNumber: 0 });

  const onChange = (key: string): any => (e: any): void => {
    let tmp = { ...data };
    tmp[key] = e.target.value;
    setData(tmp);
  }

  const onSubmit = async (e: any) => {

    e.preventDefault();
    let result: Number = await getSum(data);
    console.log(result);
    setResult(result.toString());
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Adding two numbers</h2>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="number"
                required
                name="firstNumber"
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Number"
                onChange={onChange('firstNumber')}
              />
            </div>
            <div>
              <input
                type="number"
                required
                name="secondNumber"
                className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Second Number"
                onChange={onChange('secondNumber')
                }
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              onClick={onSubmit}
            >
              Add two numbers
            </button>
          </div>
        </form>
        <div className="bg-orange-50 rounded-md border-2 p-3">
          Result:{result}
        </div>
      </div>
    </div>
  );
}

export default App;
