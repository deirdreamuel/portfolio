function setup() {
    background('red');
    let width = 256;
    let height = 200;
    createCanvas(256, 200);
    colorVal = new Array(256);
    
    for (let i = 0; i < 256; ++i) { 
      line(i, 0, i, 200);
      colorVal[i] = random(256);
      stroke(205,255,colorVal[i]);
    }
    
    frameRate(60);
  }
  
  var displaySort = 0;
  
  function draw() {
        bubble_sort(colorVal, width);
        line(displaySort, 0, displaySort, 200);
        stroke(205,255,colorVal[displaySort++]);
  }
  
  async function bubble_sort(arr, arr_size) {
    for (let i = arr_size; i > 0; --i) {
      for (let j = 1; j < i; ++j) {
         if (arr[i-1] > arr[i]) {
           swap(arr, j-1, j);
         }  
      }
    
    }
  }
  
  async function swap(arr, a, b) {
    await sleep(1);
  
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)); 
  }