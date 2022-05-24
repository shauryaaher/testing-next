export default function serverless(req, res) {
  if (req.method !== "GET") {
    res.status(405).send(`HTTPS ${405} Method Not Allowed`);
  } else {
    res.status(200).send(`
		<html>
		<body bgcolor="black">
			<h1 style="color: white">I love serverless functions.</h1>
		</body>
		</html>
	`);
  }
}
