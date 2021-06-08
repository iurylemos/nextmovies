export default async (req, res) => {
  try {
    const { id } = req.query;
    const url = `${process.env['NEXT_PUBLIC_API_BASE']}/movie/${id}?api_key=${process.env['NEXT_PUBLIC_API_KEY']}&language=pt-BR`;
    const resp = await fetch(url);
    const json = await resp.json();

    res.status(200).json({
      info: json,
    });
  } catch (error) {
    console.log('error', error);
  }
};
