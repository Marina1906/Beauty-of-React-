import reactImg from './assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt (max) {
  return Math.floor (Math.random()* (max + 1));
}


function Header() {
  return (
    <header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );

}


function App() {
  return (
    <div>  
      <Header/>
  <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
