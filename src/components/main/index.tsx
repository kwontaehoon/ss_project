import React, { useEffect, useState } from 'react'
import { TH } from './styles'
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useLoginMutation } from '../../hooks/queries/Account';

const Index = () => {

  const navigation = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    userId: "",
    password: ""
  });

  const { mutate: login, data, isSuccess } = useLoginMutation();
  const [notFind, setNotFind] = useState({
    open: false,
    content: ""
  });


  useEffect(() => {
    if(data?.data?.status == "success"){
      setNotFind({open: false, content: ""});
      navigation("/to_do_list");
    }else if(isSuccess){
      if(loginInfo.userId == ""){
        setNotFind({open: true, content: "아이디를 입력해 주세요."})
      }else if(loginInfo.password == ""){
        setNotFind({open: true, content: "비밀번호를 입력해 주세요."})
      }else{
        setNotFind({open: true, content: "입력하신 내용을 다시 확인해 주세요."})
      }
    }
  }, [data]);

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
          <TextField id="outlined-basic" label="id" variant="outlined" margin='normal' 
              onChange={(e)=>setLoginInfo({...loginInfo, userId: e.target.value})} 
              onFocus={()=>setNotFind({open: false, content: ""})}/>
          <TextField id="outlined-basic" label="password" variant="outlined" 
              onChange={(e)=>setLoginInfo({...loginInfo, password: e.target.value})} 
              onFocus={()=>setNotFind({open: false, content: ""})}/>
          {notFind.open && <div className='mt-3 text-red-500'>{notFind.content}</div>}

          <button onClick={()=>login(loginInfo)}>로그인</button>

          <div className='flex'>
            <div className='flex-1'>
              <span className='cursor-pointer' onClick={()=>pageNavi("signup")}>회원가입</span>
            </div>
            <div className='flex'>
              <div className='mr-2 cursor-pointer' onClick={()=>navigation("/idSearch")}>아이디 찾기</div>
              <div className='cursor-pointer' onClick={()=>navigation("/pwdSearch")}>비밀번호 찾기</div>
            </div>
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