<template>
  <div>
    <Hamburger class="sideBar" />
    <div>
      <div id="map"></div>
    </div>
  </div>
</template>
<script>
    import mojs from 'mo-js'
    import Hamburger from "./Hamburger";
    let infoAboutMap = [
      {
        ProbNum: [30,20],
        left: [300,400],
        top: [150,400],
        rgbaVal: [255,255,102],
        radiusVal: [20,10]
      },
      {
        ProbNum: [15,10],
        left: [900,250],
        top: [400,250],
        rgbaVal: [252,81,91],
        radiusVal: [15,15]
      },
      {
        ProbNum: [15,10],
        left: [800,250],
        top: [150,250],
        rgbaVal: [96,239,223],
        radiusVal: [15,15]
      },
      {
        ProbNum: [7,6],
        left: [1000,150],
        top: [200,150],
        rgbaVal: [186,3,237],
        radiusVal: [10,5]
      },
      {
        ProbNum: [7,6],
        left: [100,150],
        top: [400,150],
        rgbaVal: [225,120,189],
        radiusVal: [10,5]
      },
      {
        ProbNum: [7,6],
        left: [600,150],
        top: [450,150],
        rgbaVal: [132,45,255],
        radiusVal: [10,5]
      },
      {
        ProbNum: [3,4],
        left: [200,100],
        top: [300,100],
        rgbaVal: [250,1,139],
        radiusVal: [5,5]
      },
      {
        ProbNum: [3,4],
        left: [500,100],
        top: [550,100],
        rgbaVal: [255,132,12],
        radiusVal: [5,5]
      },
      {
        ProbNum: [3,4],
        left: [400,100],
        top: [450,100],
        rgbaVal: [255,132,12],
        radiusVal: [5,5]
      },
      {
        ProbNum: [3,4],
        left: [100,100],
        top: [600,100],
        rgbaVal: [0,179,255],
        radiusVal: [5,5]
      }
    ];
    const opacity = [1,0.6,0.3];
    let bubble = (arr) => {
      let array = []; // 문제들 배열
      for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].ProbNum[0]+Math.random()*arr[i].ProbNum[1]; j++) {
          array.push(
            new mojs.Shape({
              parent:       document.getElementById('map'),
              shape:  			'circle',
              left:         (arr[i].left[0]+Math.random()*arr[i].left[1])+'',
              top:          (arr[i].top[0]+Math.random()*arr[i].top[1])+'',
              fill:         "rgba("+arr[i].rgbaVal[0]+","+arr[i].rgbaVal[1]+","+arr[i].rgbaVal[2]+","+opacity[Math.floor(Math.random()*3)]+")",
              radius:       Math.random()*arr[i].radiusVal[1]+arr[i].radiusVal[0],
            })
          );
        }
      }


      // for(let i = 0; i < 15+Math.random()*10; i++) {
      //   const shape = new mojs.Shape;
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (750+Math.random()*250)+'',
      //       top:          (400+Math.random()*250)+'',
      //       fill:         "rgba(252,81,91,"+Math.random()+")",
      //       radius:       Math.random()*15+20,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 15+Math.random()*10; i++) {
      //   const shape = new mojs.Shape;
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (600+Math.random()*250)+'',
      //       top:          (150+Math.random()*250)+'',
      //       fill:         "rgba(96,239,223,"+Math.random()+")",
      //       radius:       Math.random()*15+20,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 7+Math.random()*6; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (800+Math.random()*150)+'',
      //       top:          (200+Math.random()*150)+'',
      //       fill:         "rgba(186,3,237,"+Math.random()+")",
      //       radius:       Math.random()*10+15,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 7+Math.random()*6; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (100+Math.random()*150)+'',
      //       top:          (400+Math.random()*150)+'',
      //       fill:         "rgba(255,120,189,"+Math.random()+")",
      //       radius:       Math.random()*10+15,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 7+Math.random()*6; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (600+Math.random()*150)+'',
      //       top:          (450+Math.random()*150)+'',
      //       fill:         "rgba(132,45,255,"+Math.random()+")",
      //       radius:       Math.random()*10+15,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 3+Math.random()*4; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (200+Math.random()*100)+'',
      //       top:          (300+Math.random()*100)+'',
      //       fill:         "rgba(250,1,139,"+Math.random()+")",
      //       radius:       Math.random()*15+10,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 3+Math.random()*4; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (500+Math.random()*100)+'',
      //       top:          (550+Math.random()*100)+'',
      //       fill:         "rgba(255,132,12,"+Math.random()+")",
      //       radius:       Math.random()*15+10,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 3+Math.random()*4; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (400+Math.random()*100)+'',
      //       top:          (450+Math.random()*100)+'',
      //       fill:         "rgba(255,132,12,"+Math.random()+")",
      //       radius:       Math.random()*15+10,
      //     })
      //   );
      // }
      //
      // for(let i = 0; i < 3+Math.random()*4; i++) {
      //   const shape = new mojs.Shape
      //   array.push(
      //     new mojs.Shape({
      //       parent:       document.getElementById('map'),
      //       shape:  			'circle',
      //       left:         (100+Math.random()*100)+'',
      //       top:          (600+Math.random()*100)+'',
      //       fill:         "rgba(0,179,255,"+Math.random()+")",
      //       radius:       Math.random()*5+10,
      //     })
      //   );
      // }

      array.forEach(shape => {
        const shapeShow = shape.play();
      });

      const elList = document.querySelectorAll('#map div');
      console.log('asdasd', elList);
      for(const item of elList) {
          item.addEventListener("mouseover",function(e){
            const event = e || window.event;
            const target = event.target || event.srcElement;
            let tmp = target.getAttribute('rx');
            if(target.classList.contains("hovered")) {
              target.classList.remove("hovered");
              if(tmp !== null) {
                target.setAttribute('rx', 0.5*tmp);
                target.setAttribute('ry', 0.5*tmp);
              }
            } else {
              target.classList.add("hovered");
              if(tmp !== null) {
                target.setAttribute('rx', 2*tmp);
                target.setAttribute('ry', 2*tmp);
              }
            }
            console.log(target);
          })
      }
      //
      // const mouseOver = (e) => {
      //   console.log(e.target);
      // };
      // console.log(array);
      //
      // array[0].el.addEventListener("mouseover", mouseOver);
    }


    export default {
      name: "UserMap",
      components: {Hamburger},
      mounted() {
        bubble(infoAboutMap);
      }
    }
</script>

<style scoped>
  #map {
    background-color: #1c1d20;
    width: 100vw;
    height: 87vh;
  }

  .hovered {
    border: 1px solid red;
  }
  .sideBar {
    width: 180px;
    height: 87vh;
    background: gray;
    float: right;
  }
</style>
