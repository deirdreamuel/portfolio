import React, { Component } from 'react';

let size = 800;

let values = []; // fill array with ascending values
for (let i = 0; i <= size; ++i)
  values[i] = i;

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.location = window.location.href;
    this.reset = this.props.reset;
    this.value = this.props.value;
    this.speed = this.props.speed;  
  }

  componentDidMount() {
    shuffle(values); // shuffle numbers on init
    this.draw(values);

    // draw the canvas ( style: -scatter_plot, -bargraph, lines)
    this.display(values);
  }

  done(f,id) {
    if (this.speed !== this.props.speed) {
      this.speed = this.props.speed;
      clearInterval(id);
      this.display(values);
    }
    
    //end when sorting is done
    if (f.index > size) {    
      let id = window.setInterval(() => {
        if (this.reset !== this.props.reset) {
          //clearInterval(id);
          shuffle(values);
          this.draw(values);
          this.reset = this.props.reset;
          f.index = 0;
          clearInterval(id);
        }
      }, this.interval()); 
      clearInterval(id);
    }
  }

  display(arr) { // MAIN LOOP THAT DISPLAYS ARR/ ITERATION
    var iteration =  {index : 0};

    let id = window.setInterval(() => {
      this.done(iteration, id);
      this.iteration(arr, iteration);
      this.draw(arr); 
      
      if (this.reset !== this.props.reset) {
        //clearInterval(id);
        shuffle(arr);
        this.draw(arr);
        this.reset = this.props.reset;
        iteration.index = 0;
      }
    }, this.interval());
  }

  draw(arr) {  
    try {
      if (this.location !== window.location.href)
        return;
        
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext("2d");
    
      ctx.clearRect(0, 0, size, size);

      for (let i = 0; i <= size; i += 1) {
        ctx.beginPath();
        ctx.rect(i,size-arr[i], 3, 3);

        if (arr[i] === i) {
          ctx.fillStyle = 'red';
          ctx.strokeStyle = 'red';
        } else {
          ctx.fillStyle = 'black';
          ctx.strokeStyle = 'black';
        }

        ctx.fill();
        ctx.stroke();
      }
    } catch (Error) {console.log(Error);}
  }

  interval () {
    switch(this.props.speed) {
      case '1': return 30;
      case '2': return 20; 
      case '3': return 10; 
      case '4': return 5; 
      default:  return 5;
    }
  }

  iteration(arr, f) {
    if (this.value !== this.props.value) {
      f.index = 0;
      this.value = this.props.value;
    }

    if (!this.props.active) {
      return;
    }
    
    switch (this.props.value) {
      case '1': bubble_sort(arr, size, f.index++);      break;
      case '2': selection_sort(arr, size, f.index++);   break;
      case '3': insertion_sort(arr, size, f.index++);   break;
      case '4': quick_sort(arr, 0, size -1, f.index++); break;
      default:  quick_sort(arr, 0, size -1, f.index++); break;
    }
  }

  render() {
    return(
      <div>
        <canvas id="canvas" width={size} height={size} />
      </div>
    );
  } 
}

export default Canvas;

//Fisher-Yates shuffle function
function shuffle (arr) {
  for (let i = 0; i < size ; i++) {
      let r = Math.floor(Math.random() * i);
      swap(arr, r, i);
  }
}

//-----   Sorting algorithms -----//

function bubble_sort(arr, arr_size, i) {   
  for (let j = 1; j < arr_size-i; ++j) {
    if (arr[j-1] > arr[j]) 
      swap(arr, j-1, j);
  }
} //-----

function selection_sort(arr, arr_size, i) {
  let min = i;

  for (let j = i + 1; j < arr_size; ++j) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }

  if (min !== i) 
    swap(arr, i, min);  
} //-----


function insertion_sort(arr, arr_size, i) {
    if (i === 0) 
      i = 1;
    for (let j = i; j > 0; --j) {
      if(arr[j] < arr[j-1]){
        swap(arr, j, j-1);
      }
    } 
}

let stack = []; 
let top = -1; // initialize top of stack 

// push initial values of lo and hi to stack 
function quick_sort (arr, lo, hi, i) {
  if (top === 0)
    return;
  if (i === 0) {
    stack[++top] = lo; 
    stack[++top] = hi; 
  }
  
  // Keep popping from stack while is not empty 
  //for (let x = 0; x < 2; ++x) {
  // Pop h and l 
  hi = stack[top--]; 
  lo = stack[top--];
  
  // Set pivot element at its correct position 
  // in sorted array 
  let p = partition(arr, lo, hi); 

  // If there are elements on right side of pivot, 
  // then push right side to stack 
  if (p + 1 < hi) { 
      stack[++top] = p + 1; 
      stack[++top] = hi; 
  } 

  // If there are elements on left side of pivot, 
  // then push left side to stack 
  if (p - 1 > lo) { 
    stack[++top] = lo; 
    stack[++top] = p - 1; 
  }   
}

function partition(arr, lo, hi) { 
    let x = arr[hi]; 
    let i = (lo - 1); 

    for (let j = lo; j <= hi - 1; j++) { 
        if (arr[j] <= x) { 
            i++; 
            swap(arr,i, j); 
        } 
    } 

    swap(arr, i+1, hi); 
    return (i + 1); 
} 

function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

