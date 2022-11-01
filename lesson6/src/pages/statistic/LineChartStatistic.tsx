import {
  LineChart,
  Line,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts'

const LineChartStatistic = (props: any) => {
  const { chartData, type } = props

  return (
    <div className='w-full overflow-hidden text-[9px] flex justify-center'>
      <ResponsiveContainer width='100%' height={210}>
        <AreaChart
          width={400}
          height={200}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor={type === 'deposite' ? '#43888350' : '#F95B5150'}
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor={type === 'deposite' ? '#438883' : '#F95B51'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Tooltip />
          <Area
            type='monotone'
            dataKey='total'
            stroke={type === 'deposite' ? '#438883' : '#F95B51'}
            fillOpacity={1}
            fill='url(#colorPv)'
          />
          <XAxis dataKey='name' />
          <YAxis width={60} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineChartStatistic
