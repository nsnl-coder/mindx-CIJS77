import {
  LineChart,
  Line,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

const LineChartStatistic = () => {
  return (
    <div className='w-full overflow-auto'>
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
          <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#43888350' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#438883' stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type='monotone'
          dataKey='pv'
          stroke='#438883'
          fillOpacity={1}
          fill='url(#colorPv)'
        />
      </AreaChart>
    </div>
  )
}

export default LineChartStatistic
