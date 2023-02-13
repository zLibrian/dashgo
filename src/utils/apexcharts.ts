import { theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

export const apexChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },

  grid: {
    show: false,
  },

  dataLabels: {
    enabled: false,
  },

  tooltip: {
    enabled: true,
    theme: 'dark',
    x: {
      show: true,
      format: 'dd/MM/yy HH:mm',
    },
  },

  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    labels: {
      datetimeFormatter: {
        year: 'yyyy',
        month: "MMM 'yy",
        day: 'dd MMM',
        hour: 'HH:mm',
      },
    },

    categories: [
      '2021-03-21T00:00:00.000Z',
      '2021-03-22T00:00:00.000Z',
      '2021-03-23T00:00:00.000Z',
      '2021-03-24T00:00:00.000Z',
      '2021-03-26T00:00:00.000Z',
      '2021-03-27T00:00:00.000Z',
      '2021-03-28T00:00:00.000Z',
    ],
  },

  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export const subscriberSeries: ApexAxisChartSeries = [
  { name: 'inscritos', data: [10, 26, 8, 8, 60, 132, 102] },
];

export const openingRateSeries: ApexAxisChartSeries = [
  { name: 'taxa de abertura', data: [19, 23, 21, 3, 10, 29, 14] },
];
