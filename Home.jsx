import React from 'react';
import Heading from './Heading';
import Hero from './Hero';
import Dashbords from './Dashbords';
import Crime from './Crime';
import Lisner from './Lisner';
import Userfull from './Usefulllink'
export default function Home() {
  return (
    <div>
      <Heading/>
      <Hero/>
      <Dashbords/>
      <Crime/>
      <Lisner/>
      <Userfull/>
    </div>
  )
}
