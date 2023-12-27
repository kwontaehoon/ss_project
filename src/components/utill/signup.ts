import { AxiosResponse } from "axios";
import { UseMutateAsyncFunction, UseMutateFunction, UseQueryOptions, UseQueryResult } from "react-query";

type InfoType = Record<"userId" | "password" | "passwordCheck" | "name" | "email", string>;
type NotFindType = Record<"userId" | "password" | "passwordCheck" | "name" | "email", boolean>;
type IdCheckType = {
    status?: Number
}
interface ValidationType {
    info: InfoType,
    notFind: NotFindType,
    setNotFind: React.Dispatch<React.SetStateAction<NotFindType>>,
    signup: UseMutateFunction<AxiosResponse<any, any>, unknown, Object, unknown>,
    idCheck: UseQueryResult<IdCheckType>
}

export const signupValidation = ({ info, notFind, setNotFind, signup, idCheck }: ValidationType): void => {
    const { userId, password, passwordCheck, name, email } = info;

    const updateNotFind = (field: keyof NotFindType, value: boolean): void => {
        setNotFind((prevNotFind) => ({ ...prevNotFind, [field]: value }));
    };

    if (userId === '') {
        updateNotFind('userId', true);
    }
    if (password === '') {
        updateNotFind('password', true);
    }
    if (password !== passwordCheck) {
        updateNotFind('passwordCheck', true);
    }
    if (name === '') {
        updateNotFind('name', true);
    }
    if (email === '') {
        updateNotFind('email', true);
    }

    if(idCheck?.status == "success" && info.password == info.passwordCheck && Object.values(info).every(value => value !== '')){
        const { passwordCheck, ...infoWithoutPasswordCheck } = info;
        signup(infoWithoutPasswordCheck);
    };
};
