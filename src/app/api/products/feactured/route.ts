import data from '../data.json'
export async function GET() {
  const feacuredProducts = data.products.filter((product) => product.featured)
  return Response.json(feacuredProducts)
}
