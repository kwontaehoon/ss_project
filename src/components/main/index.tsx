import React from 'react'
import { TH } from './styles'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const Index = () => {

  const navigation = useNavigate();

  const pageNavi = (e: string) => {
    if (e == 'signup') {
      navigation('signup');
    } else {
      navigation('signup');
    }
  }

  return (
    <TH.Container>
      <TH.Header>

      </TH.Header>
      <TH.Main>
        <div className='text-2xl flex justify-center items-center mb-5'>
          <div className='mr-2'>Toy Project</div>
          <div className='text-xs pt-2'>with TS</div>
        </div>
        <div className='flex flex-col'>
          <TextField id="outlined-basic" label="id" variant="outlined" margin='normal' />
          <TextField id="outlined-basic" label="password" variant="outlined" />
          <button>로그인</button>
          <div className='flex'>
            <div className='flex-1'>
              <span className='cursor-pointer' onClick={()=>pageNavi("signup")}>회원가입</span>
            </div>
            <div className='cursor-pointer'>아이디 비밀번호 찾기</div>
          </div>
        </div>
      </TH.Main>
      <TH.Footer>
        <div></div>
      </TH.Footer>
    </TH.Container>
  )
}

export default Index