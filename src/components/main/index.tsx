import React from 'react'
import { S } from './styles'
import { projectName } from '../../constants/Text/Main'

const index = () => {

  return (
    <S.Container>
      <S.Header>
        <div>Toy Projects</div>
      </S.Header>
      <S.Main>
          {projectName.map(x => {
            return (
              <div className='flex justify-center'>{x.title}</div>
            )
          })}
      </S.Main>
      <S.Footer>
        <div>footer</div>
      </S.Footer>
    </S.Container>
  )
}

export default index