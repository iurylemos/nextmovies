export default async (req, res) => {
  try {
    const url = `${process.env['NEXT_PUBLIC_API_BASE']}/trending/movie/week?api_key=${process.env['NEXT_PUBLIC_API_KEY']}&language=pt-BR`;
    const resp = await fetch(url);
    const json = await resp.json();

    res.status(200).json({
      list: json.results,
    });
  } catch (error) {
    console.log('error', error);
  }
};
