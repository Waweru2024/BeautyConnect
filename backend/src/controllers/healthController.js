export function healthCheck(req, res) {
  res.json({
    status: "OK",
    message: "BeautyConnect API is running",
    version: "1.0.0"
  });
}
