import Compressor from 'compressorjs'

const compressorOptions = {
  maxHeight:1920,
  maxWidth :1920,
  quality  :.3
}

export default (file, options)=> {
  return new Promise((resolve, reject) => {
    return new Compressor(file, {
      ...compressorOptions,
      ...options,
      success:resolve,
      error  :reject
    })
  })
}
