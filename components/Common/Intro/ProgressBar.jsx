// import { useState } from "react";
// import ApexCharts from 'apexcharts'

// const ProgressBar = () => {

//     const [state, setState] = useState({
//         series: [76],
//         options: {
//             chart: {
//                 type: 'radialBar',
//                 offsetY: -20,
//                 sparkline: {
//                     enabled: true
//                 }
//             },
//             plotOptions: {
//                 radialBar: {
//                     startAngle: -90,
//                     endAngle: 90,
//                     track: {
//                         background: "#e7e7e7",
//                         strokeWidth: '97%',
//                         margin: 5, // margin is in pixels
//                         dropShadow: {
//                             enabled: true,
//                             top: 2,
//                             left: 0,
//                             color: '#999',
//                             opacity: 1,
//                             blur: 2
//                         }
//                     },
//                     dataLabels: {
//                         name: {
//                             show: false
//                         },
//                         value: {
//                             offsetY: -2,
//                             fontSize: '22px'
//                         }
//                     }
//                 }
//             },
//             grid: {
//                 padding: {
//                     top: -10
//                 }
//             },
//             fill: {
//                 type: 'gradient',
//                 gradient: {
//                     shade: 'light',
//                     shadeIntensity: 0.4,
//                     inverseColors: false,
//                     opacityFrom: 1,
//                     opacityTo: 1,
//                     stops: [0, 50, 53, 91]
//                 },
//             },
//             labels: ['Average Results'],
//         },

//     })

//     return (
//         <div id="chart">
//             <ApexCharts options={state.options} series={state.series} type="radialBar" />
//         </div>

//     );
// }

// export default ProgressBar
// // const domContainer = document.querySelector('#app');