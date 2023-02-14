'use client';

import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

import {
  apexChartOptions,
  openingRateSeries,
  subscriberSeries,
} from '@/utils/apexcharts';

export default function Dashboard() {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px">
      <Box p="8" bg="gray.800" borderRadius="8" pb="4">
        <Text fontSize="lg" mb="4">
          Inscritos da semana
        </Text>
        <Chart
          type="area"
          height={160}
          options={apexChartOptions}
          series={subscriberSeries}
        />
      </Box>
      <Box p="8" bg="gray.800" borderRadius="8">
        <Text fontSize="lg" mb="4">
          Taxa de abertura
        </Text>
        <Chart
          type="area"
          height={160}
          options={apexChartOptions}
          series={openingRateSeries}
        />
      </Box>
    </SimpleGrid>
  );
}
