import {useState} from 'react';

import {CORE_CONCEPTS} from '../../data.js';
import Header from './Components/Header/Header.jsx';
import CoreConcept from './Components/CoreConcepts.jsx';
import TabButton from './Components/Tab.Button.jsx';

function App () {
  useState();

  function handleSelect (selectedButton) {
    console.log (selectedButton);
    tabContent = selectedButton;
    console.log (tabContent);
  }

  console.log ('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              iamge={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect ('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect ('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect ('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect ('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
