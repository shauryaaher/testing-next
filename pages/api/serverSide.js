export default function serverSide(req, res) {
    if (req.method !== "GET") {
        res.status(405).send(`HTTP ${405}. Method not allowed`);
        throw new Error("Method not allowed");
    } else {
        res.status(200).json([
            {
                "id": 0,
                "yesOrNo": "yes"
            },
            {
                "id": 1,
                "yesOrNo": "no"
            }
        ]);
    }
}
