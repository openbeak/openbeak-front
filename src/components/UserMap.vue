<template>
    <div>
    </div>
</template>
<script>
    import mojs from 'mo-js'

    let array = []; // 문제들 배열
    for(let i = 0; i < 10; i++) {
      const shape = new mojs.Shape
      array.push(
        new mojs.Shape({
          shape:  			'circle',
          left:         (200+Math.random()*250)+'',
          top:          (300+Math.random()*250)+'',
          fill:         "rgb(255,255,"+Math.random()*200+")",
          radius:       Math.random()*10+15,
        })
      );
    }

    for(let i = 0; i < 10; i++) {
      const shape = new mojs.Shape
      array.push(
        new mojs.Shape({
          shape:  			'circle',
          left:         (600+Math.random()*400)+'',
          top:          (200+Math.random()*400)+'',
          fill:         "rgb("+100+i*5+","+i*10+","+100+i*5+")",
          radius:       Math.random()*15+10,
        })
      );
    }

    for(let i = 0; i < 10; i++) {
      const shape = new mojs.Shape
      array.push(
        new mojs.Shape({
          shape:  			'circle',
          left:         (300+Math.random()*200)+'',
          top:          (500+Math.random()*200)+'',
          fill:         "rgb(255,"+Math.random()*80+","+Math.random()*80+")",
          radius:       Math.random()*15+10,
        })
      );
    }
    // array.forEach(shape => {
    //   const shapeShow = shape.play();
    // });

    export default {
        name: "UserMap",
        method: {
        }
    }
</script>

<style scoped>
svg:hover {
  color: black;
}
</style>
