export const monthList = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const sumValue = (array, key) => {
  return array.reduce((accumulator, object) => {
    return accumulator + object[key]
  }, 0)
}

export const getDailySum = (array, year, month, key) => {
  const dailySum = array.filter((item) => {
    return item[key] ? item.date.includes(`${year}-${month}`) : null
  })
  return sumValue(dailySum, key)
}

export const getMonthlySum = (array, year, key) => {
  const monthlySum = array.map((item, index) =>
    getDailySum(array, `${year}`, ('0' + (index + 1)).slice(-2), key),
  )
  return monthlySum.splice(0, 12)
}

export const getMonthlyData = (monthlySum) => {
  let result = {}
  monthList.map((date, i) => (result[date] = monthlySum[i]))
  return result
}

export const setGrowthRate = (array) => {
  // return slicedArray.reduce((a, b) => ((b - a) / a) * 100).toFixed(2);
  let percent
  const slicedArray = array.slice(-2)
  const a = slicedArray[0]
  const b = slicedArray[1]

  if (b !== 0) {
    if (a !== 0) {
      percent = ((b - a) / a) * 100
    } else {
      percent = b * 100
    }
  } else {
    percent = -a * 100
  }
  return percent.toFixed(2)
}

export const setCostPerMetric = (amount, amountKey, metric, metricKey) => {
  return (sumValue(amount, amountKey) / sumValue(metric, metricKey)).toFixed(2)
}

export const getTotalAvg = (array, key) => {
  return (array.reduce((a, b) => a + b[key], 0) / array.length).toFixed(2)
}
