import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ChartContainer } from './style';
import { AiOutlineQuestionCircle as QuestMark } from 'react-icons/ai';

const state = {
  series : [{
    name: "VAR",
    type: "column",
    data: [
      28, 28, 28, 15, 28, 52, 28, 19, 28, 28, 19, 28, 16, 28, 16, 28, 16, 28, 16, 28, 28, 28, 16
    ],
    color: "#0D3B85",
    enableDataLabel: true,
    dash: 0
  }, {
    name: "RRP",
    type: "line",
    data: [
      3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161
    ],
    color: "#74788D",
    enableDataLabel: false,
    dash: 3
  }],
  options : { 
    chart: {
      stacked: true,
      height: 300,
      innerWidth: 600,
      // offsetY: -50,
      parentHeightOffset: 0,
      toolbar: {
        offsetX: 0,
        offsetY: 0,
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          reset: false,
          pan: '<img src="">'
        }
      },
      zoom: {
        autoScaleYaxis: false,
        enabled: false,
        resetIcon: {
            offsetX: -10,
            offsetY: 0,
            fillColor: '#fff',
            strokeColor: '#37474F'
        },
        selection: {
            background: '#90CAF9',
            border: '#0D47A1'
        }    
      }
    },
    grid: {
      padding: {
        top: -20,
        left: 0,
      }
    },
    stroke: {
      width: [0, 4]
    },
    title: {
      text: 'Price',
      offsetX: 45,
    },
    subtitle: {
      text: 'Spot Price',
      align: 'left',
      margin: 10,
      offsetX: 45,
      offsetY: 15,
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1]
    },
    labels: [
      "0:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
    ],
    yaxis: [{
      show: false
    }, {
      show: false
    }],
    legend: {
      position: 'left',
      offsetY: 20,
    }
  }
}

const Chart = () => {
  return (
    <ChartContainer>
      <ApexCharts options={state.options} series={state.series} type="area" height={200} width={600} />
      <QuestMark className="tooltipIcon" color='#7a8a9a' size={16} />
      <div className="tooltip">Tooltip Text</div>
    </ChartContainer>
  );
}

export default Chart