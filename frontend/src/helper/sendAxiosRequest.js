import axios from 'axios'

const sendAxiosRequest = async (requestConfig, applyData) => {
  const { url, method, data } = requestConfig

  try {
    const response = await axios({
      url,
      method,
      data,
    })

    applyData(response.data)
  } catch (err) {
    console.log('err', err)
  }
}

export default sendAxiosRequest
