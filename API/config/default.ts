export default {
    port:8080,
    DBUrl:"mongodb://localhost:27017/Nasfam",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publickey: `-----BEGIN PUBLIC KEY-----
    MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJEJhQ8bDAVDb0roYVnqNDaQ/ojPaQnw
    +3MlhaCL0VAY6tKUvqLmAZZg5UVFYdVaAiNXdlHJxEXnFrjlJNBjqScCAwEAAQ==
    -----END PUBLIC KEY-----`,
    privatekey: `-----BEGIN RSA PRIVATE KEY-----
    MIIBOgIBAAJBAJEJhQ8bDAVDb0roYVnqNDaQ/ojPaQnw+3MlhaCL0VAY6tKUvqLm
    AZZg5UVFYdVaAiNXdlHJxEXnFrjlJNBjqScCAwEAAQJABpe7L6OYGUkmbu4/NpoZ
    w301xLxA1w3YMDS9bT3Nxuk5ha9GJvMv8e42R7/24aZKQoU+sCBAaqXo+pdv6MFx
    sQIhAMT8/YCggbLd7cU1ghQY3dYkDZx4XsjeszGUmqL4X6U5AiEAvHxoa/ca7Zqd
    5xcL3UfbTz8uP3p3DV9ExTeBNGZhIV8CICgNPEnD2LsSbn6zY3BMogYhLHdM7hCv
    XwXMrihGkcPZAiA/ijz1cIbuZHoophdE0G15KJZhpdoucthPF6gBzyWdRwIhALLk
    TLjYTuUHmbd6DrV0UbSVOW12xrLdCeIh9DRdwo08
    -----END RSA PRIVATE KEY-----`
  

}