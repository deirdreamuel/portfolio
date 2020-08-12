import React, { Component }  from 'react';

const asciiStyle = {
    fontSize: '3px',
    marginLeft: '10vw'
}

const uploadStyle = {
    display: 'none'
}

const uploadLabelStyle = {
    fontWeight: 'bold',
    marginLeft: '10vw',
    color: 'black',
    textDecoration: 'underline dotted red'
    
}

class image2ascii extends Component {
    openFile(e) {
        // put the picture in canvas to access each pixel
        const canvas = document.getElementById('preview');
        const context = canvas.getContext('2d');

        // open single file
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.onload = function(event) {
            const image = new Image();
            image.onload = () => {
                //compress image to fit screen
                let [width, height] = compress(image.width, image.height);
                canvas.width  = width;
                canvas.height = height;
                canvas.style.display="none";

                // draw image to canvas (hidden)
                context.drawImage(image, 0, 0, width, height);

                // convert image to grayscale
                let grayscaleImage = convert2grayscale(context, width, height);

                // convert grayscale to ascii based on pallete
                drawAscii(grayscaleImage, canvas.width); 
            };
            image.src = event.target.result;
        };
        reader.readAsDataURL(file); 
    }

    render() {       
        return (
            <div>
                <label style={uploadLabelStyle} >
                <input type="file" name="image" onChange={this.openFile} accept="image/*" style={uploadStyle}/>
                UPLOAD PHOTO</label>
                <canvas id="preview"></canvas>
                <pre id="ascii" style={asciiStyle}></pre>
            </div>
        );
    }
}

export default image2ascii;

function convert2grayscale(context, width, height) {
    const image = context.getImageData(0, 0, width, height);

    // fill this array with converted pixels rgb to grayscale
    let grayscaleImage = [];

    for (let i = 0; i < image.data.length; i += 4) {
        let r = image.data[i];
        let g = image.data[i + 1];
        let b = image.data[i + 2];
    
        let gspixel = grayscale(r, g, b);
        image.data[i]       = gspixel;
        image.data[i + 1]   = gspixel;
        image.data[i + 2]   = gspixel;

        grayscaleImage.push(gspixel);
    }

    context.putImageData(image, 0, 0);
    return grayscaleImage;
}

function grayscale(r, g, b) {
    // equation to convert rgb to grayscale
    return 0.21 * r + 0.72 * g + 0.07 * b;        
}

function pixel2ascii(grayscale) {
    // pick ascii character based on pixel darkness
    const palette = "$@MNHQ$OC?7>i!;:-,\"^`'_. ";
    return palette[Math.ceil(((palette.length - 1) * grayscale) / 255)];
}

function drawAscii(grayscale, width) {
    let asciiImage = document.getElementById('ascii');

    // convert image to ascii string with appropriate line breaks
    const ascii = grayscale.reduce((asciiImage, grayscale, index) => {
        let char = pixel2ascii(grayscale);

        if ((index + 1) % width === 0) 
            char += '\n';

        return asciiImage + char;
    }, "");

    // add our string to <pre>
    asciiImage.textContent = ascii;
}

function compress(width, height) {
    const MAX_WIDTH = 100;
    const MAX_HEIGHT = 150;  

    // function to compress image based on our font ratio
    const rectifiedWidth = Math.floor(getFontRatio() * width);

    if (height > MAX_HEIGHT) {
        const reducedWidth = Math.floor(rectifiedWidth * MAX_HEIGHT / height);
        return [reducedWidth, MAX_HEIGHT];
    }

    if (width > MAX_WIDTH) {
        const reducedHeight = Math.floor(height * MAX_WIDTH / rectifiedWidth);
        return [MAX_WIDTH, reducedHeight];
    }

    return [rectifiedWidth, height];
}

function getFontRatio() {
    const pre = document.createElement("pre");
    pre.style.display = "inline";
    pre.textContent = " ";
  
    document.body.appendChild(pre);
    const { width, height } = pre.getBoundingClientRect();
    document.body.removeChild(pre);
  
    return height / width;
}
  
