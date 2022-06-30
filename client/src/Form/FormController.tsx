import React, { useState } from 'react';
import FileUploaderView from './FormView'
import axios from 'axios';

const FormController = () => {

    interface IMailSendData {
        senderEmail: string;
        senderPassword: string;
        senderService: string;
        messageText: string;
        messageHeader: string;
        recieversList: string;
    }

    const initialMailSendData: IMailSendData = { senderEmail: '', senderPassword: '', senderService: '', messageText: '', messageHeader: '', recieversList: '' }


    const [loading, setLoading] = useState(false)
    const [mailSendData, setMailSendData] = useState<IMailSendData>(initialMailSendData)

    const onTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setMailSendData({ ...mailSendData, [e.target.name]: e.target.value });
    }


    const submit = async () => {
        setLoading(true)
        const resData = await axios.post("http://localhost:80/send", mailSendData);
        setLoading(false)
    }


    return (
        <FileUploaderView
            loading={loading}
            onTextChange={onTextChange}
            submit={submit}
            mailSendData={mailSendData}
            setMailSendData={setMailSendData}
        />
    )
}

export default FormController;


