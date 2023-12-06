import React from 'react'
import { TH } from './styles'
import { projectName } from '../../constants/Text/Main'
import { useNavigate } from 'react-router-dom';

const Index = () => {

  const navigation = useNavigate();

  const pageNavi = (e:string) => {
    if(e == 'To Do List'){
      navigation('To_Do_List');
    }
  }

  return (
    <TH.Container>
      <TH.Header>
        <div className='mr-2 text-2xl' style={{fontFamily: ''}}>Toy Project</div>
        <div className='text-xs pt-2'>with TS</div>
      </TH.Header>
      <TH.Main>
          {projectName.map(x => {
            return (
              <button 
                key={x.id}
                onClick={()=>pageNavi(x.title)}>{x.title}
              </button>
            )
          })}
      </TH.Main>
      <TH.Footer>
        <div></div>
      </TH.Footer>
    </TH.Container>
  )
}

export default Index