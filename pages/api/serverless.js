export default function serverless(req, res) {
  if (req.method !== "GET") {
    res.status(405).send(`HTTPS ${405} Method Not Allowed`);
	throw new Error("Method not allowed");
  } else {
    res.status(200).send(`
		<html>
		<body bgcolor="black">
			<h1 style="color: white">The word 'serverless'(in serverless functions) is a misnomer. It actually means that you don't have to manage or scale any servers on your own. You can just deploy you code and the cloud service handles the rest of the work for you.</h1>
		</body>
		</html>
	`);
  }
}
