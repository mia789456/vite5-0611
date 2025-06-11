import React, { useState } from 'react';
import { Outlet, Route, Routes, useSearchParams } from 'react-router-dom';

export default function Test() {
  console.log('renderTest............')
  const [name, setName] = useState('name');
  const [age, setAge] = useState(22);

  // 获取和设置URL search parameters
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick = () => {
    // 方式1: 直接设置多个参数
    setSearchParams({
      name: name,
      age: age.toString(), // URL参数都是字符串
    });

  }

  // 从URL参数中读取状态（可选）
  const loadStateFromUrl = () => {
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    console.log('name', name, 'age', age)
    if (name && age) {
      setName(name);
      setAge(parseInt(age, 10));
    }

    // 如果使用JSON序列化方式
    // const stateParam = searchParams.get('state');
    // if (stateParam) {
    //   try {
    //     const parsedState = JSON.parse(stateParam);
    //     setName(parsedState.name);
    //     setAge(parsedState.age);
    //   } catch (error) {
    //     console.error('Failed to parse state from URL:', error);
    //   }
    // }
  };

  return <div>
    I am Test
    <button onClick={onClick}>click me</button>
    <button onClick={loadStateFromUrl}>
      从URL参数加载状态
    </button>
    <div>Test Routes</div>
    <Routes>
        <Route path="test1" element={<div>Test Routes</div>} />
        <Route path="test2" element={<div>Test Routes</div>} />
    </Routes>
    <Outlet />
  </div>
}