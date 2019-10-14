import React, { Component } from 'react';

let values = [];

class Canvas extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");

    //Get ascending numbers
    for (let i = 0; i <= 300; ++i) {
      values [i] = i;
    }

    //shuffle numbers
    for (let i = 0; i < 300 ; i++)
    {
        let rand_num = Math.floor(Math.random() * i);
        swap(values, rand_num, i);
    }

    for (let i = 0; i <= 300; i += 5) {
      ctx.beginPath();
      ctx.rect(i, 300 , 5, -values[i]);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.stroke();
    } 
    
    this.updateAnimation();
  
  }

  updateAnimation(){
    window.setInterval(() => {
      selection_sort(values, 300);

      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, 300, 300);

      for (let i = 0; i <= 300; i += 5) {
      ctx.beginPath();
      ctx.rect(i, 300 , 5, -values[i]);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.stroke();
      } 

    },50);
    
  }
  
  render() {
    return(
      <div>
        <canvas ref="canvas" width={300} height={300} />
      </div>
    );
  }
  
}

export default Canvas;

function bubble_sort(arr, arr_size) {
  for (let i = arr_size; i >= 0; --i) {
    let swapped = false;
    for (let j = 1; j < i; ++j) {
      if (values[j-1] > values[j]) {
        swap(values, j-1, j);
        swapped = true;
      }
    }
    return swapped;
  }
}

function selection_sort(arr, arr_size) {
  for (let i = 0; i < arr_size-1; ++i) {
    let min = i;
    for (let j = i + 1; j < arr_size; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      swap(arr, i, min);
      return true;
    }
  }  
}

function insertion_sort(arr, arr_size) {
  for (let i = 1; i < arr_size; ++i) {
    for (let j = i; j > 0; --j) {
      if(arr[j] < arr[j-1]){
        swap(arr, j, j-1);
      }
    } 
  }
}

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}