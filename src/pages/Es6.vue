<template>
  <div class="es6">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'es6',
    data () {
      return {

      };
    },
    methods: {
      pro() {
        /*function timeout(ms) {
          return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
          });
        }

        timeout(2000).then((value) => {
          console.log(value);
        });*/


        /*let promise = new Promise(function(resolve, reject) {
          console.log('Promise');
          resolve();
        });

        promise.then(function() {
          console.log('Resolved.');
        });

        console.log('Hi!');*/

        // Promise
        // Hi!
        // Resolved

        /*var getJSON = function(url) {
          var promise = new Promise(function(resolve, reject){
            var client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();

            function handler() {
              if (this.readyState !== 4) {
                return;
              }
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error(this.statusText));
              }
            };
          });

          return promise;
        };

        getJSON("http://60.205.115.173:8881/yitai-ces-web/growthProcess/findStudentList?educationId=361000&schoolId=110200019&type=student&classIndex=877051430760878080&userId=2847048&schoolYear=2016-2017&term=1").then(function(json) {
          console.log(json);
        }, function(error) {
          console.error('出错了', error);
        });*/


       /* var p1 = new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('fail')), 3000)
        })

        var p2 = new Promise(function (resolve, reject) {
          setTimeout(() => resolve(p1), 1000)
        })

        p2
          .then(result => console.log(result))
          .catch(error => console.log(error))
        */

        var someAsyncThing = function() {
          return new Promise(function(resolve, reject) {
            // 下面一行会报错，因为x没有声明
            resolve(x + 2);
          });
        };

//        someAsyncThing().then(function() {
//          console.log('everything is great');
//        }, function(error) {
//          console.log(error);
//          console.log('虽然报错，但脚本未终止，继续运行！');
//        });

        someAsyncThing().then(function() {
          console.log('everything is great');
        }).catch(function(error) {
          console.log(error);
          console.log('虽然报错，但脚本未终止，继续运行！');
        });



      }
    },
    mounted() {
      let [x, , y] = [1, 2, 3]; //x = 1, y = 3
      let [head, ...body] = [1, 2, 3, 4]; //head = 1, body = [2, 3, 4]
      let [foo] = []; //foo = undefined
      let [bar, foo2] = [1];  //bar = 1, foo2 = undefined
      let [x1 = 1] = [undefined];
      let [x2 = 1] = [null];
      let {obj1, obj2} = {obj1: '111', obj2: '222'};
      let {foo3: bar3} = {foo3: '111111'};
      this.pro();
//      debugger;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
