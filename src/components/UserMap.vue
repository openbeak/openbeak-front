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
    import Modal from "./Modal";

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


      console.log(array);
      array.forEach(shape => {
        const shapeShow = shape.play();
      });

      const elList = document.querySelectorAll('#map div');
      console.log(elList);
      let index = -1; // 현재 확대되어 있는 문제 index
      let mutex = -1; // 바로 직전 확대된 문제 index
      let mutexR = 0;
      let tmp2 = 0;
      let tmp3 = 0;
      for(const item of elList) {
          item.addEventListener("mouseover",function(e) {
            const event = e || window.event;
            const target = event.target || event.srcElement;
            index = indexLst(item); // 인덱스 변경
            if (mutex !== -1) {

              console.log(mutexR);
              array[mutex].then({
                radius: mutexR
              });

              elList.item(mutex).childNodes[0].childNodes[0].setAttribute('rx', mutexR);
              elList.item(mutex).childNodes[0].childNodes[0].setAttribute('ry', mutexR);
            }
            mutex = index;
            let tmp = item.style.width;
            mutexR = tmp.substring(0, tmp.length-2) / 2.0;
            array[index].then({
              radius: 50
            });

            target.setAttribute('rx', 50);
            target.setAttribute('ry', 50);

          });
      }
    }
    function indexLst(el) {
      var children = el.parentNode.childNodes,
        i = 0;
      for (; i < children.length; i++) {
        if (children[i] == el) {
          return i;
        }
      }
      return -1;
    }

    export default {
      name: "UserMap",
      components: {Hamburger},
      mounted() {
        bubble(infoAboutMap);
      }
        name: "UserMap",
        components: {Modal, Hamburger},
        created(){
          console.log("http.get method");
          this.$http.get(`http://ec2-18-191-120-181.us-east-2.compute.amazonaws.com:8080/api/solvedProblems/list/${this.$store.state.user_id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        },
        method: {
        },
        mounted() {
          test();
        }
    }
</script>

<style scoped>
  #map {
    background-color: #1c1d20;
    width: 100vw;
    height: 87vh;
  }

  .sideBar {
    width: 350px;
    height: 87vh;
    background: gray;
    float: right;
  }
</style>
