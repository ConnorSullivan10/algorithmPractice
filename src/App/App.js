/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
  // Assignment #1

  // Sort an array
  // Given an array of integers, sort the values in order without using native methods like array.sort()

  // Example 1:
  // Input : [3,4,1]
  // Output : [1,3,4]

  // Example 2:
  // Input : [-6,0,56,-100,3]
  // Output : [-100,-6,0,3,56]

  // Example 3:
  // Input : [6,4,8,34,67,0]
  // Output : [0,4,6,8,34,67]

  sorter = (arr) => {
    const sortedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (sortedArray.length === 0) {
        sortedArray.push(arr[i]);
      } else {
        let done = false;
        while (!done) {
          done = true;
          for (let j = 1; j < arr.length; j += 1) {
            if (arr[j - 1] > arr[j]) {
              done = false;
              sortedArray[0] = arr[j - 1];
              // eslint-disable-next-line no-param-reassign
              arr[j - 1] = arr[j];
              // eslint-disable-next-line no-param-reassign
              arr[j] = sortedArray[0];
            }
          }
        }
      }
    }
    // console.log(arr);
    return arr;
  };

  render() {
    const array = [3, 4, 1];
    const array2 = [-6, 0, 56, -100, 3];
    return (
      <div className="App">
        <div>{this.sorter(array)}</div>
        <div>{this.sorter(array2)}</div>
      </div>
    );
  }
}

export default App;
