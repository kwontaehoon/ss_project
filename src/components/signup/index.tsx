import React, { useEffect, useState } from 'react'
import { TH } from './styles'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useTestQuery } from '../../hooks/queries/Test';
import { useIdCheckQuery, useSignupMutation } from '../../hooks/queries/Account';
import { signupValidation } from '../../utill/signup';

const Index = () => {

  const navigation = useNavigate();


  const [info, setInfo] = useState({
    userId: '',
    password: '',
    passwordCheck: '',
    name: '',
    email: ''
  });

  const [notFind, setNotFind] = useState({
    userId: false,
    password: false,
    passwordCheck: false,
    name: false,
    email: false
  });

  const { mutate: signup } = useSignupMutation();
  const { data: idCheck, refetch } = useIdCheckQuery({userId: info.userId});

  return (
    <TH.Container>
      <TH.Header>

      </TH.Header>
      <TH.Main>
        <div className='text-2xl flex justify-center items-center mb-5'>
          <div className='mr-2'>회원가입</div>
        </div>
        <div className='flex flex-col'>
          <TextField id="outlined-basic" size="small" label="아이디" variant="outlined" margin='normal'
            onChange={(e) => setInfo({ ...info, userId: e.target.value })}
            onFocus={() => setNotFind({ ...notFind, userId: false })}
            onBlur={() => refetch()} />
          {notFind.userId && <div className='text-red-500 ml-1'>아이디를 확인해주세요.</div>}
          {idCheck?.status == "error" && <div className='text-red-500 ml-1'>중복된 아이디입니다.</div>}

          <TextField id="outlined-basic" size="small" label="비밀번호" variant="outlined" margin='normal'
            onChange={(e) => setInfo({ ...info, password: e.target.value })}
            onFocus={() => setNotFind({ ...notFind, password: false })} />
          {notFind.password && <div className='text-red-500 ml-1'>비밀번호를 확인해주세요.</div>}

          <TextField id="standard-basic" size="small" label="비밀번호 확인" variant="outlined" margin='normal'
            onChange={(e) => setInfo({ ...info, passwordCheck: e.target.value })}
            onFocus={() => setNotFind({ ...notFind, passwordCheck: false})} />
          {notFind.passwordCheck && <div className='text-red-500 ml-1'>비밀번호를 다시 확인해주세요.</div>}

          <TextField id="standard-basic" size="small" label="이름" variant="outlined" margin='normal'
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            onFocus={() => setNotFind({ ...notFind, name: false })} />
          {notFind.name && <div className='text-red-500 ml-1'>이름을 확인해주세요.</div>}

          <TextField id="standard-basic" size="small" label="이메일" variant="outlined" margin='normal'
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            onFocus={() => setNotFind({ ...notFind, email: false })} />
          {notFind.email && <div className='text-red-500 ml-1'>이메일을 확인해주세요.</div>}

          <button onClick={() => signupValidation({ info, notFind, setNotFind, signup, idCheck })}>회원가입</button>
          <div className='flex justify-center'>
            <div className='mr-2'>이미 계정이 있습니까?</div>
            <div className='cursor-pointer' onClick={() => navigation("/")}>로그인하기</div>
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