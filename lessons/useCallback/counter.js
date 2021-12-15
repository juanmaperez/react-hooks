import { useState} from 'react'


function Button({onSelect, item}){
  console.log('Rendering Button')

  return <button className="border-2 border-black p-2 m-2" onClick={() => onSelect(item)} >Item {item}</button>
}

function Display({selected}){
  console.log('Rendering Display')

  return <h3>{ selected === null ? 'Nothing selected' : `Item ${selected} selected` }</h3>
}


function Counter(){
  const [selected, setSelected] = useState(null);

  const select = (item) => setSelected(item)

  return (
    <>
      <Display selected={selected}/>
      <div>
        <Button onSelect={select} item={1}/>
        <Button onSelect={select} item={2}/>
        <Button onSelect={select} item={3}/>
        <Button onSelect={select} item={4}/>
      </div>
    </>
  )
}

export default Counter