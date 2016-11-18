/**
 * Stacks allow data to be popped and pushed to a stack
 *
 * ---
 * |a|
 * |b|
 * |c|
 * ---
 *
 * stack.pop()
 *
 * ---
 * |b|
 * |c|
 * ---   -> a
 *
 * stack.push(d)
 *
 * ---
 * |d|
 * |b|
 * |c|
 * ---   -> b
 *
 * @flow
 */
import { expect } from 'chai'


export default class Stack {
  items: []

  constructor(items?: any[]) {
    this.items = items || []
  }

  pop(): any {
    return this.items.length ?
     ((): any => {
       const item = this.items[this.items.length - 1]
       this.items.splice(this.items.length - 1, 1)
       return item
     })()
     : false
  }

  push(item: any): Stack {
    this.items.push(item)
    return this
  }

  empty(): bool {
    return this.items.length === 0
  }

  peek() {}
}

test('Stack', () => {
  const stack = new Stack(['a', 'b', 'c'])
  expect(stack.push('d').items).to.eql(['a', 'b', 'c', 'd'])
  expect(((): any[] => {
    stack.pop()
    return stack.items
  })()).to.eql(['a', 'b', 'c'])
})
