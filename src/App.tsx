import {Header} from './lib/Header';
import {Resumn} from './lib/Resumn';

function App() {
  return (
    <div className='container mx-auto max-w-4xl p-4'>
      <div className='flex'>
        <div className='flex-grow'>
          <Header></Header>
        </div>
        <div className='flex-none pt-10 w-1/5 ml-4 pl-4'>
          <Resumn></Resumn>
        </div>
      </div>
    </div>
  )
}

export default App