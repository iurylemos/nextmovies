export default async (req, res) => {
  try {
    const { movie } = req.query;
    const url = `${process.env['NEXT_PUBLIC_API_BASE']}/search/movie?api_key=${process.env['NEXT_PUBLIC_API_KEY']}&language=pt-BR&query=${movie}`;
    const resp = await fetch(url);
    const json = await resp.json();

    res.status(200).json({
      movie: json.results,
    });
  } catch (error) {
    console.log('error', error);
  }
};
