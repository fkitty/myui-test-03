// import Button from './button';

// const a = 1;
// console.log('hi====');
// export {Button, a};
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
import Test from './test';

ReactDOM.render(
  <div>
    <Icon name="wechart" />
    <div style={{ border: '1px solid red'}}>
      {/* <Test /> */}
    </div>
  </div>
, document.body);



/**
 * 模仿new关键词实现
 * @param {Function} constructor 构造函数
 * @param {...any} argument 任务参数
 */
const _new = (constructor) => {
  const obj = {}; // 创建一个空对象
  obj.__proto__ = constructor.prototype; // 设置原型
  const res = constructor.apply(obj, argument); // 新创建的对象作为this的上下文传递给构造函数
  return (typeof res === 'object') ? res : obj // 如果该函数没有返回对象，则返回this(这个this指constructor执行时内部的this,即res)
}

function Person(name,sex){
  this.name = name 
  this.sex = sex
}

const people = new Person('Ben','man');
const peopleOther = _new(Person,'Alice','woman');
console.info('people',people);// people Person { name: 'Ben', sex: 'man' }
console.info('peopleOther',peopleOther);// peopleOther Person { name: 'Alice', sex: 'woman' }
console.info('people.__proto__',people.__proto__);//people.__proto__ Person {}
console.info('peopleOther.__proto__',peopleOther.__proto__);//peopleOther.__proto__ Person {}


