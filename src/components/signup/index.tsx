import React from 'react'
import { TH } from './styles'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useTestQuery } from '../../hooks/queries/Test';

const Index = () => {

  const navigation = useNavigate();
  const { data } = useTestQuery();
  console.log("data: ", data);

  const pageNavi = () => {
    navigation("/");
  }

  return (
    <TH.Container>
      <TH.Header>

      </TH.Header>
      <TH.Main>
        <div className='text-2xl flex justify-center items-center mb-5'>
          <div className='mr-2'>회원가입</div>
        </div>
        <div className='flex flex-col'>
          <TextField className='test' id="outlined-basic" size="small" label="아이디" variant="outlined" margin='normal' />
          <TextField id="outlined-basic" size="small" label="비밀번호" variant="outlined" margin='normal' />
          <TextField id="standard-basic" size="small" label="비밀번호 확인" variant="outlined" margin='normal' />
          <TextField id="standard-basic" size="small" label="이름" variant="outlined" margin='normal'/>
          <TextField id="standard-basic" size="small" label="이메일" variant="outlined" margin='normal'/>
          
          <button>회원가입</button>
          <div className='flex justify-center'>
            <div className='mr-2'>이미 계정이 있습니까?</div>
            <div className='cursor-pointer' onClick={pageNavi}>로그인하기</div>
            <div></div>
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