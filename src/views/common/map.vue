<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
      <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index" ></el-amap-marker>
    </el-amap>

  </div>
</template>

<script>
  import VueAMap from 'vue-amap'
  VueAMap.initAMapApiLoader({
    key: 'tb2e73c0e3a576f8aa0b503190e6ed539',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
  });
  const exampleComponents = {
    props: ['text'],
    template: `<div>text from  parent: {{text}}</div>`
  }
  export default{
    name: 'amap-page',
    data() {
      return {
        count: 1,
        slotStyle: {
          padding: '2px 8px',
          background: '#eee',
          color: '#333',
          border: '1px solid #aaa'
        },
        zoom: 14,
        center: [113.882273,35.382161],
        markers: [
          {
            position: [113.882273,35.382161],
            events: {
              dragend: (e) => {
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
              }
            },
            visible: true,
            draggable: false,
            template: '<span>1</span>',
            iconStyle:'red'
          },
        ],
        renderMarker: {
          position: [113.882273,35.382161],
          contentRender: (h, instance) => {
            // if use jsx you can write in this
            // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
            return h(
              'div',
              {
                style: {background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'},
                on: {
                  click: () => {
                    const position = this.renderMarker.position;
                    this.renderMarker.position = [position[0] + 0.002, position[1] - 0.002];
                  }
                }
              },
              ['marker inner text']
            )
          }
        },
        componentMarker: {
          position: [113.882273,35.382161],
        },
        slotMarker: {
          position: [113.882273,35.382161],
        }
      };
    },
    methods: {
      onClick() {
        this.count += 1;
      },
      changePosition() {
        let position = this.markers[0].position;
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002];
      },
      chnageDraggle() {
        let draggable = this.markers[0].draggable;
        this.markers[0].draggable = !draggable;
      },
      toggleVisible() {
        let visableVar = this.markers[0].visible;
        this.markers[0].visible = !visableVar;
      },
      addMarker() {
        let marker = {
          position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
        };
        this.markers.push(marker);
      },
      removeMarker() {
        if (!this.markers.length) return;
        this.markers.splice(this.markers.length - 1, 1);
      }
    }
  };
</script>

<style scoped>
  .amap-demo {
    height: 300px;
    overflow: hidden;
  }
  @media screen and (min-device-width:300px) and (max-device-width: 767px) {
    .amap-demo{border-radius: 0;height: 270px;}
  }
</style>
