import * as React from 'react'
import Section from '../Section';
import './styles.scss'

const Techniques: React.FunctionComponent = () => (
  <Section title="Techniques." theme="dark" id="techniques">
    <div className="techniques">
    </div>
  </Section>
)

export default React.memo(Techniques)