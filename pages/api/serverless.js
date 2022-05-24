export default function serverless(req, res) {
	res.send(`
		<html>
		<body bgcolor="black">
			<h1 style="color: white">I love serverless functions.</h1>
		</body>
		</html>
	`);
}
