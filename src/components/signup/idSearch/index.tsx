import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TH } from './styles';
import { useIdSearchMutation } from '../../../hooks/queries/Account';

const Index = () => {

  const navigation = useNavigate();

  const [info, setInfo] = useState({
    name: '',
    email: ''
  });

  const [notFind, setNotFind] = useState(false);
  const { mutate: idSearch } = useIdSearchMutation();

  return (
    <TH.Container>
      <TH.Header>
        <div>가입정보로</div>
        <div>아이디를 확인하세요</div>
      </TH.Header>
      <TH.Main>
        <div className='mb-2'>이름*</div>
        <input placeholder='이름을 입력해 주세요.' onChange={(e)=>setInfo({...info, name: e.target.value})} />
        <div className='mt-4 mb-2'>이메일*</div>
        <input placeholder='이메일을 입력해 주세요.' onChange={(e)=>setInfo({...info, email: e.target.value})}/>

        {notFind && <div className='mt-3 text-red-500'>입력하신 내용을 다시 확인해 주세요.</div>}
        
        <TH.Button onClick={()=>idSearch(info)}>아이디 찾기</TH.Button>
      </TH.Main>
      <TH.Footer>
      </TH.Footer>
    </TH.Container>
  )
}

export default Index