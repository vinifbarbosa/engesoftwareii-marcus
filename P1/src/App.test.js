import React from 'react';
import App from './App';
import {Route,MemoryRouter} from 'react-router-dom';
import {shallow, configure, mount} from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import Menu from './components/menu/Menu';
import Lista from './pages/lista/Lista';
import CriarLista from './pages/lista/CriarLista';
import Listas from './pages/lista/Listas';


configure({adapter: new adapter()});
let pathMap = {};
describe('Teste de rotas', () =>{
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.pathMap] = routeProps.component;
      return pathMap;
    },{});
  })
  it('/Menu carrega o componente Menu', () => {
    expect(Menu).toBe(Menu);
  })
  it('/Lista carrega o componente Lista', () => {
    expect(Lista).toBe(Lista);
  })
  it('/CriarLista carrega o componente CriarLista', () => {
    expect(CriarLista).toBe(CriarLista);
  })
  it('/Listas carrega o componente Listas', () => {
    expect(Listas).toBe(Listas);
  })
});
test('/Menu utilizando Memory route', () => {
  const envolpe = mount(
    <MemoryRouter initialEntries={['/Menu']}><App/></MemoryRouter>
  );
  expect(envolpe.find(Menu)).toHaveLength(1);
});
