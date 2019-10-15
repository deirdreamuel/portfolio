import React, { Component } from 'react';

let size = 300;
let v = '1'
let s = '1'

let values = []; // get ascending numbers.
for (let i = 0; i <= size; ++i)
  values [i] = i;
    

class Canvas extends Component {
  componentDidMount() {
    // shuffle numbers if 'randomize' when initialized
    shuffle(values);
    this.draw(values);

    let id = window.setInterval(() => {
    // draw the canvas ( style: -scatter_plot, -bargraph, lines)
      this.display(values);
    }, 200);

  }

  clear(arr) {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);
  }

  done(f,id) {
    if(!this.props.active) {
      clearInterval(id);
    }

    if (s != this.props.speed) {
      s = this.props.speed;
      clearInterval(id);
      this.display(values);
    }
    
    if(f.index > size*size) //end when sorting is done    
      clearInterval(id);
  }

  draw(arr) {
    
      const canvas = this.refs.canvas;
      const ctx = canvas.getContext("2d");
    
      ctx.clearRect(0, 0, size, size);

      for (let i = 0; i <= size; i += 5) {
        ctx.beginPath();
        ctx.rect(i,size-arr[i], 5, 5);
        ctx.fillStyle = "red";
        ctx.fillStyle = "black";
        ctx.strokeStyle = "red";
        ctx.fill();
        ctx.stroke();
      }
  }

  display(arr) { // display sorting algorithm of choice 
    var iteration =  {index : 0};

    if (this.props.active) {
      let id = window.setInterval(() => {
        
        this.done(iteration, id);
        this.iteration(arr, iteration);
        this.draw(arr); 
      },this.interval()); //set interval
    }
  }

  interval () {
    switch(this.props.speed) {
      case '1': return 100;
      case '2': return 50; 
      case '3': return 25; 
      case '4': return 12; 
    }
  }

  iteration(arr, f) {
    if (this.props.reset) {
      shuffle(arr);
      f.index = 0;
    }

    if (v != this.props.value) {
      f.index = 0;
      v = this.props.value;
    }
    
    switch (v) {
      case '1': bubble_sort(arr, size, f.index++); break;
      case '2': selection_sort(arr, size, f.index++); break;
      case '3': insertion_sort(arr, size, f.index++); break;
      //case '4': quick_sort(arr, size, f.index++); break;
    }
  }

  render() {
    return(
      <div>
        <canvas ref="canvas" width={size} height={size} />
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
    for (let j = 1; j < arr_size; ++j) {
      if (arr[j-1] > arr[j]) 
        swap(arr, j-1, j);

  }
} //-----

function selection_sort(arr, arr_size, i) {
    var min = i;

    for (let j = i + 1; j < arr_size; ++j) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) 
      swap(arr, i, min);  
} //-----


function insertion_sort(arr, arr_size, i) {
    if (i == 0) 
      i = 1;
    for (let j = i; j > 0; --j) {
      if(arr[j] < arr[j-1]){
        swap(arr, j, j-1);
      }
    } 
}

//swap function ( [], index a, b)
function swap(arr, a, b) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}