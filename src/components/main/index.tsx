import React from 'react'
import { S } from './styles'
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
    <S.Container>
      <S.Header>
        <div className='mr-2 text-2xl'>Toy Project</div>
        <div className='text-xs pt-2'>with TS</div>
      </S.Header>
      <S.Main>
          {projectName.map(x => {
            return (
              <button 
                key={x.id}
                onClick={()=>pageNavi(x.title)}>{x.title}
              </button>
            )
          })}
      </S.Main>
      <S.Footer>
        <div></div>
      </S.Footer>
    </S.Container>
  )
}

export default Index