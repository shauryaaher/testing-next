// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send(`HTTPS ${405} Method Not Allowed`);
  } else {
    res.setHeader("Cache-Control", "public, max-age=300 s-maxage=1800");
    res.status(200).json({ name: "My name" });
  }
}
