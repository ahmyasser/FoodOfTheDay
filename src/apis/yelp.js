const axios = require('axios').default;

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  timeout: 1000,
  headers: {
    Authorization: "Bearer U9GklGCXQKkOUt2iSOTpuVCH4FUabG5QYhzl4DbyKKH5IgLTJcOWwL_vwxiEfbrObKeADhyCYkI5f8OTXW6tdTjrgx79k-hUDos_aqEF3ELh5Gv6eeEAvkrYg37eXXYx"
  }
});
