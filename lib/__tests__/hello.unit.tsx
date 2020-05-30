function add (a:number, b:number){
  return a + b;
}

describe('我的第一个测试用例', () => {
  it('1等于1', () => {
    // expect(1).toEqual(2); // 会报错
    // expect(1).toEqual(1);
    expect(add(1, 2)).toEqual(3);
  })
})
// test('hello', () => {
//   expect(1).toEqual(2)
// })
// 测试的名字
// 测试的函数
// 超时时间
// 期待1等于2
// 运行yarn test 如果报错，测试就配置好了
