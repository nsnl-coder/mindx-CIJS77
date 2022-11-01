const getDurationFromNow = ({ months, days, hours, minutes, seconds }: any) => {
  let durationFromNow
  if (months !== 0)
    durationFromNow = `${months} ${months! > 1 ? 'months' : 'month'} ago`
  else if (days !== 0)
    durationFromNow = `${days} ${days! > 1 ? 'days' : 'day'} ago`
  else if (hours !== 0)
    durationFromNow = `${hours} ${hours! > 1 ? 'hours' : 'hour'} ago`
  else if (minutes !== 0)
    durationFromNow = `${minutes} ${minutes! > 1 ? 'minutes' : 'minute'} ago`
  else if (seconds !== 0)
    durationFromNow = `${seconds} ${seconds! > 1 ? 'seconds' : 'second'} ago`
  return durationFromNow
}

export default getDurationFromNow
