export default function serverless(req, res) {
  if (req.method !== "GET") {
    res.status(405).send(`HTTPS ${405} Method Not Allowed`);
    throw new Error("Method not allowed");
  } else {
    res.status(200).send(`
		<html>
		<head>
			<style>
				.text {
					color: white;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
				}
				a {
					color: dodgerblue;
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
				}
			</style>
		</head>
		<body bgcolor="black">
			<h1 class="text">The word 'serverless'(in serverless functions) is a misnomer. It actually means that you don't have to manage or scale any servers on your own. You can just deploy you code and the cloud service handles the rest of the work for you.</h1>
			<a href="https://testing-next-silk.vercel.app/">Go to homepage</a>
		</body>
		</html>
	`);
  }
}
