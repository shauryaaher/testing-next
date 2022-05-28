export default function newFunc(req, res) {
  if (req.method !== "GET") {
    res.status(405).send("Method not allowed");
    throw new Error(`HTTP ${405}. Method not allowed`);
  } else {
    res.json([
      {
        id: 0,
        data: "Hello",
      },
      {
        id: 1,
        data: "world",
      },
    ]);
  }
}
