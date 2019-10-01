import * as React from 'react'
import Section from '../Section';
import './styles.scss'

const Clients: React.FunctionComponent = () => (
  <Section title="Customers." size="auto" id="customers">
    <div className="customers">
      <img
        title="Tele2"
        alt="Tele2"
        src="/static/images/logos/tele2.png"
        height="40"
      />

      <img
        title="T-Mobile"
        alt="T-Mobile"
        src="/static/images/logos/t-mobile.png"
        height="40"
      />

      <img
        title="Obvion"
        alt="Obvion"
        src="/static/images/logos/obvion.png"
        height="80"
      />

      <img
        title="Rabobank"
        alt="Rabobank"
        src="/static/images/logos/rabobank.png"
        height="80"
      />
    </div>
  </Section>
)

export default React.memo(Clients)