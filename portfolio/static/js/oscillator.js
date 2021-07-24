function initOciliator(remove) {

    let lettre_list = document.querySelectorAll('.blast');

    if(!remove) {

        var ctx,
            hue,
            logo,
            form,
            buffer,
            target = {},
            tendrils = [],
            settings = {};

        settings.friction = 0.5;
        settings.trails = 30;
        settings.size = 50;
        settings.dampening = 0.25;
        settings.tension = 0.98;

        Math.TWO_PI = Math.PI * 2;

        // ========================================================================================
        // Oscillator
        // ----------------------------------------------------------------------------------------

        function Oscillator(options) {
            this.init(options || {});
        }

        Oscillator.prototype = (function () {

            var value = 0;

            return {

                init: function (options) {
                    this.phase = options.phase || 0;
                    this.offset = options.offset || 0;
                    this.frequency = options.frequency || 0.001;
                    this.amplitude = options.amplitude || 1;
                },

                update: function () {
                    this.phase += this.frequency;
                    value = this.offset + Math.sin(this.phase) * this.amplitude;
                    return value;
                },

                value: function () {
                    return value;
                }
            };

        })();

        // ========================================================================================
        // Tendril
        // ----------------------------------------------------------------------------------------

        function Tendril(options) {
            this.init(options || {});
        }

        Tendril.prototype = (function () {

            function Node() {
                this.x = 0;
                this.y = 0;
                this.vy = 0;
                this.vx = 0;
            }

            return {

                init: function (options) {

                    this.spring = options.spring + (Math.random() * 0.1) - 0.05;
                    this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
                    this.nodes = [];

                    for (var i = 0, node; i < settings.size; i++) {

                        node = new Node();
                        node.x = target.x;
                        node.y = target.y;

                        this.nodes.push(node);
                    }
                },

                update: function () {

                    var spring = this.spring,
                        node = this.nodes[0];

                    node.vx += (target.x - node.x) * spring;
                    node.vy += (target.y - node.y) * spring;

                    for (var prev, i = 0, n = this.nodes.length; i < n; i++) {

                        node = this.nodes[i];

                        if (i > 0) {

                            prev = this.nodes[i - 1];

                            node.vx += (prev.x - node.x) * spring;
                            node.vy += (prev.y - node.y) * spring;
                            node.vx += prev.vx * settings.dampening;
                            node.vy += prev.vy * settings.dampening;
                        }

                        node.vx *= this.friction;
                        node.vy *= this.friction;
                        node.x += node.vx;
                        node.y += node.vy;

                        spring *= settings.tension;
                    }
                },

                draw: function () {

                    var x = this.nodes[0].x,
                        y = this.nodes[0].y,
                        a, b;

                    ctx.beginPath();
                    ctx.moveTo(x, y);

                    for (var i = 1, n = this.nodes.length - 2; i < n; i++) {

                        a = this.nodes[i];
                        b = this.nodes[i + 1];
                        x = (a.x + b.x) * 0.5;
                        y = (a.y + b.y) * 0.5;

                        ctx.quadraticCurveTo(a.x, a.y, x, y);
                    }

                    a = this.nodes[i];
                    b = this.nodes[i + 1];

                    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
                    ctx.stroke();
                    ctx.closePath();
                }
            };

        })();

        // ----------------------------------------------------------------------------------------

        function init(event) {

            document.removeEventListener('mousemove', init);
            document.removeEventListener('touchstart', init);

            document.addEventListener('mousemove', mousemove);
            document.addEventListener('touchmove', mousemove);
            document.addEventListener('touchstart', touchstart);

            mousemove(event);
            reset();
            loop();
        }

        function reset() {

            tendrils = [];

            for (var i = 0; i < settings.trails; i++) {

                tendrils.push(new Tendril({
                    spring: 0.45 + 0.025 * (i / settings.trails)
                }));
            }
        }


        function randomIntFromInterval(min, max) { // min and max included
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var color = randomIntFromInterval(1, 2);
        function loop() {

            if (!ctx.running) return;

            // ctx.globalCompositeOperation = 'source-over';
            // ctx.fillStyle = '#1D1D1D';
            // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = '#f12626';
            ctx.lineWidth = 1;


            if (color == 1) {
                ctx.strokeStyle = 'rgb(255, 255, 255, 0.25)';
            } else {
                ctx.strokeStyle = 'rgb(241,38,38,0.25)';
            }


            for (var i = 0, tendril; i < settings.trails; i++) {
                tendril = tendrils[i];
                tendril.update();
                tendril.draw();
            }

            ctx.frame++;
            requestAnimFrame(loop);
        }

        function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight;
        }

        function start() {
            if (!ctx.running) {
                ctx.running = true;
                loop();
            }
        }

        function stop() {
            ctx.running = false;
        }

        function mousemove(event) {
            if(event.target.classList.contains("blast")){
                
                //Create a custom bounce ease:
                //and do the squash/stretch at the same time:
                event.target.className+=' animated rubberBand';
                event.target.addEventListener('animationend', function(e){
                    e.target.classList.remove('animated','rubberBand');
                });

                // gsap.from(event.target, {duration: 0.75,scale:2, ease: Power4.easeOut});
                // gsap.to(event.target, {duration: 0.75,scale:1, ease: Power4.easeOut});
            }
            if (event.touches) {
                target.x = event.touches[0].pageX;
                target.y = event.touches[0].pageY;
            } else {
                target.x = event.clientX
                target.y = event.clientY;
            }
            event.preventDefault();
        }

        function touchstart(event) {
            if (event.touches.length == 1) {
                target.x = event.touches[0].pageX;
                target.y = event.touches[0].pageY;
            }
        }

        function keyup(event) {

            switch (event.keyCode) {
                case 32:
                    save();
                    break;
                default:
                // console.log(event.keyCode);
            }
        }

        function letters(html_selector) {
            function name_index(string,name){
                let start,end;
                console.log("in")
                for (let i=0;i<string.length;i++){
                    if (string[i].toLowerCase() == name[0].toLowerCase()){
                        start = i;
                        end = start;
                        let j = 0;
                        while (j<name.length && string[start+j] == name[j]){
                            end +=1;
                            j+=1;
                        }
                        if (j==name.length){
                            return {start:start , end:end}
                        }
                    }
                }
                return 0,0
            }
            let el = document.querySelector(html_selector);
            let html = "";
            let text = el.getAttribute('aria-label');
            if (text){
                let idx = name_index(text,"El Mehdi");
                for (let i=0;i<text.length;i++){
                    if ((i>=idx.start) && (i<idx.end) && text[i]!=" "){
                        html+=`<span class="blast" aria-hidden="true" style="opacity: 1;color:var(--dark-red);">${text[i]}</span>`
                    }
                    else if (text[i]==" " && text[i+1]==" "){
                        html+='<br>';
                        i++;
                    }
                    else if (text[i]!= " "){
                        html+=`<span class="blast" aria-hidden="true" style="opacity: 1;">${text[i]}</span>`
                    }
                    else{
                        html+=`<span class="blast" aria-hidden="true" style="opacity:0;">X</span>`
                    }
                    
                }
            }

            el.innerHTML = html;
        }

        function save() {

            if (!buffer) {

                buffer = document.createElement('canvas');
                buffer.width = screen.availWidth;
                buffer.height = screen.availHeight;
                buffer.ctx = buffer.getContext('2d');

                form = document.createElement('form');
                form.method = 'post';
                form.input = document.createElement('input');
                form.input.type = 'hidden';
                form.input.name = 'data';
                form.appendChild(form.input);

                document.body.appendChild(form);
            }

            buffer.ctx.fillStyle = 'rgba(8,5,16)';
            buffer.ctx.fillRect(0, 0, buffer.width, buffer.height);

            buffer.ctx.drawImage(canvas,
                Math.round(buffer.width / 2 - canvas.width / 2),
                Math.round(buffer.height / 2 - canvas.height / 2)
            );


            window.open(buffer.toDataURL(), 'wallpaper', 'top=0,left=0,width=' + buffer.width + ',height=' + buffer.height);

            // form.input.value = buffer.toDataURL().substr(22);
            // form.submit();
        }

        window.requestAnimFrame = (function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
                window.setTimeout(fn, 1000 / 60)
            };
        })();


        ctx = document.getElementById('canvas').getContext('2d');

        ctx.running = true;
        ctx.frame = 1;


        hue = new Oscillator({
            phase: Math.random() * Math.TWO_PI,
            amplitude: 69,
            frequency: 0.0015,
            offset: 269
        });

        letters("#let");
        resize();
        document.addEventListener('mousemove', init);
        document.addEventListener('touchstart', init);
        document.body.addEventListener('orientationchange', resize);
        window.addEventListener('resize', resize);
        window.addEventListener('focus', start);
        window.addEventListener('blur', stop);

        

    } else {


        document.body.removeEventListener('orientationchange', resize);
        window.removeEventListener('resize', resize);
        window.removeEventListener('focus', start);
        window.removeEventListener('blur', stop);

        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('touchmove', mousemove);
        document.removeEventListener('touchstart', touchstart);


    }
}
window.addEventListener('load',()=>initOciliator(false));

const canvas = document.querySelector("#skills-canvas");
const ctx = canvas.getContext("2d");
// OPTIONS
const opts = {
    TEXT: [
      "Django",
      "Python",
      "Javascript",
      "React.js",
      "Laravel",
      ".Net 3.5"
    ],
  
    FONT_SIZE:186,
    FILL: "#F38B49",
    BG_COLOR: "#111",
  
    LINE_GAP: 10,
  
    CURVE_STRENGTH: 0.5,
    WAVE_SPEED: 0.02,
  
    LOOP: true
  };
  
  const COLORS = [
    "#fff",
    "#f18a54",
    "#D4342B",
    "#a31515",
    "#f12626",
  ];
  let selected = [];
  let resetFills = false;
  
  console.clear();
  
  function map(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  }
  
  function randColor() {
    let color = COLORS[Math.floor(Math.random() * COLORS.length)];
    if (selected.length == COLORS.length-1){
      selected = [];
    }
    while (selected.includes(color)){
      console.log("colo",color,"sel",selected,selected.includes(color))
      color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    selected.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
    return COLORS[Math.floor(Math.random() * COLORS.length)];
   
  }
  
  const fontFile = "https://assets.codepen.io/9332/rubikmono.ttf";//make sur to update for prod
  
  canvas.addEventListener("mouseenter", () => {
    lines = shuffle(lines);
    resetFills = true;
  });
  canvas.addEventListener("click", () => {
    lines = shuffle(lines);
    resetFills = true;
  });
  
  // Global state
  let font;
  let path;
  let lines = [];
  let width;
  let height;
  
  let timer = 0;
  
  /**
   * Size canvas
   */
  function setupCanvas() {
    // Change scale to 1 on retina screens to see blurry canvas.
    
    let scale = window.devicePixelRatio;
    height = canvas.height* scale;
    width = canvas.width* scale;
    canvas.width = width;
    canvas.height = height;
  
    // Normalize coordinate system to use css pixels.
    ctx.scale(scale, scale);
  }
  
  /**
   * Clear canvas
   */
  function clearCanvas() {
    ctx.fillStyle = opts.BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  
  class Line {
    constructor(font, str) {
      this.str = str.trim().split(" ").join("");
      this.path = font.getPath(this.str, 0, 0, opts.FONT_SIZE);
      this.fill = randColor();
      this.path.fill = this.fill;
  
      Object.assign(this, this.path.getBoundingBox());
      this.width = this.x2 - this.x1;
      this.height = this.y2 - this.y1;
    }
  
    reset() {
      this.path = font.getPath(this.str, 0, 0, opts.FONT_SIZE);
      if (resetFills) {
        this.fill = randColor();
      }
      this.path.fill = this.fill;
    }
  
    moveY(y) {
      this.path.commands.forEach((cmd) => {
        switch (cmd.type) {
          case "M":
          case "L":
            cmd.y += y;
            break;
          case "C":
            cmd.y1 += y;
            cmd.y2 += y;
            cmd.y += y;
            break;
          case "Q":
            cmd.y1 += y;
            cmd.y += y;
            break;
        }
      });
    }
  
    stretchX() {
      this.path.commands.forEach((cmd) => {
        Line.processCmdPoints(cmd, (x, y) => {
          return {
            x: map(x, this.x1, this.x2, 0, width),
            y
          };
        });
      });
    }
  
    topOffset(index) {
      this.path.commands.forEach((cmd) => {
        Line.processCmdPoints(cmd, (x, y) => {
          let yImpact = ((this.y2 - y) / this.height) * opts.CURVE_STRENGTH;
  
          let sinX = map(
            x,
            0,
            width,
            0 + timer + index,
            2 * Math.PI + timer + index
          );
          let sinY = Math.sin(sinX);
          const offsetY = y + sinY * this.height * yImpact;
          return {
            x,
            y: offsetY
          };
        });
      });
    }
  
    bottomOffset(index) {
      this.path.commands.forEach((cmd) => {
        Line.processCmdPoints(cmd, (x, y) => {
          let yImpact = ((y - this.y1) / this.height) * opts.CURVE_STRENGTH;
  
          let sinX = map(
            x,
            0,
            width,
            0 + timer + index,
            2 * Math.PI + timer + index
          );
          let sinY = Math.sin(sinX);
          const offsetY = y + sinY * this.height * yImpact;
          return {
            x,
            y: offsetY
          };
        });
      });
    }
  
    static processCmdPoints(cmd, func) {
      // callback.apply(this, args);
      if (cmd.x) {
        let point = func.apply(this, [cmd.x, cmd.y]);
        cmd.x = point.x;
        cmd.y = point.y;
      }
      if (cmd.x1) {
        let point = func.apply(this, [cmd.x1, cmd.y1]);
        cmd.x1 = point.x;
        cmd.y1 = point.y;
      }
      if (cmd.x2) {
        let point = func.apply(this, [cmd.x2, cmd.y2]);
        cmd.x2 = point.x;
        cmd.y2 = point.y;
      }
    }
  }
  
  async function main() {
    // Load font and get path
    font = await opentype.load(fontFile);
    let total_height = 0;
    opts.TEXT.forEach((line) => {
      let text = new Line(font, line);
      // total_height += text.height + opts.LINE_GAP;
      // if (total_height<=canvas.height){
      //   lines.push(text);
      // }
      lines.push(text);
    });
    draw();
  }
  
  function draw() {
    clearCanvas();
  
    let y = 0;
  
    timer += opts.WAVE_SPEED;
  
    lines.forEach((line, index) => {
      line.reset();
      y += line.height + opts.LINE_GAP;
      line.stretchX();
  
      if (index % 2 === 0) {
        line.bottomOffset(Math.floor(index / 2) / 2);
      } else {
        line.topOffset(Math.floor(index / 2) / 2);
      }
      line.moveY(y);
      line.path.draw(ctx);
    });
  
    resetFills = false;
  
    if (opts.LOOP) {
      requestAnimationFrame(draw);
    }
  }
  
  window.addEventListener("resize", setupCanvas);
  
  setupCanvas();
  main();
  
  (function(){
    const canvas = document.getElementById("canvas");
    const skill_canvas = document.getElementById("skills-canvas");
    const landing = document.getElementById("landing");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    skill_canvas.height = 9*window.innerHeight/10;
    skill_canvas.width = window.innerWidth/2;
    width = skill_canvas.height ;
    height =skill_canvas.width ;
    if (window.innerWidth<800){
      opts.FONT_SIZE = 100;
    }
    
    canvas.style.display = 'initial'
    window.addEventListener("resize",(e)=>{
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        skill_canvas.height = 9*window.innerHeight/10;
        skill_canvas.width = window.innerWidth/2;
    })

    let nav = document.getElementById("nav");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        let st = window.pageYOffset || document.documentElement.scrollTop; 
        if (st > lastScrollTop){
            //console.log("down");
            nav.style.opacity = 0.1;
        } else {
            //console.log("up");
            nav.style.opacity = 1;
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);})()