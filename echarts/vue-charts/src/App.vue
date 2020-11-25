<template>
  <div>
    <v-chart v-if="brush" :options="brush"/>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/candlestick'
import echarts from 'echarts'
import dataTool from 'echarts/extension/dataTool'

export default {

  components: {
    'v-chart': ECharts
  },

  mounted() {
    fetch('https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples/data/asset/data/les-miserables.gexf')
      .then(response => response.text())
      .then(result => {
        console.log(echarts)
        var graph = dataTool.gexf.parse(result);
        var categories = [];
        for (var i = 0; i < 9; i++) {
            categories[i] = {
                name: '类目' + i
            };
        }
        graph.nodes.forEach(function (node) {
            node.itemStyle = null;
            node.value = node.symbolSize;
            node.symbolSize /= 1.5;
            node.label = {
                show: node.symbolSize > 30
            };
            node.category = node.attributes.modularity_class;
        })

        this.brush = {
              title: {
                  text: 'Les Miserables',
                  subtext: 'Default layout',
                  top: 'bottom',
                  left: 'right'
              },
              tooltip: {},
              legend: [{
                  // selectedMode: 'single',
                  data: categories.map(function (a) {
                      return a.name;
                  })
              }],
              animationDuration: 1500,
              animationEasingUpdate: 'quinticInOut',
              series : [
                  {
                      name: 'Les Miserables',
                      type: 'graph',
                      layout: 'none',
                      data: graph.nodes,
                      links: graph.links,
                      categories: categories,
                      roam: true,
                      focusNodeAdjacency: true,
                      itemStyle: {
                          borderColor: '#fff',
                          borderWidth: 1,
                          shadowBlur: 10,
                          shadowColor: 'rgba(0, 0, 0, 0.3)'
                      },
                      label: {
                          position: 'right',
                          formatter: '{b}'
                      },
                      lineStyle: {
                          color: 'source',
                          curveness: 0.3
                      },
                      emphasis: {
                          lineStyle: {
                              width: 10
                          }
                      }
                  }
              ]
          };
      })
  },

  data() {
    return {
      brush: false
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>