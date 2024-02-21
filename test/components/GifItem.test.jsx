import { render } from "@testing-library/react"

import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 
  const title = 'Saitama'
  const url = 'https://one-punch.com/saitama.jpg'
  const id = '1234'

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url = {url} />);
    expect( container ).toMatchSnapshot();

   })
 })