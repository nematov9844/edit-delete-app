import React from 'react'
import Form from './components/form/form'
import Card from './components/card/card'

export default function App() {
  const [data,setData] = React.useState([])
  return (
    <div className='flex flex-col items-center py-5 gap-4'>
      <Form setData={setData}/>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            setData={setData}
            id={item.id}
            name={item.name}
          />
        );
      })}
    </div>
  )
}
