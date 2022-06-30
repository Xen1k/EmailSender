import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Form.css'


const FormView = (props: any) => (
    <div className='main-container'>
        <div className='form-container'>
            <SenderDataInput {...props} />
            <MessageDataInput {...props} />
            <RecieverDataInput {...props} />
        </div>
        <Button className='send-button' variant="contained" onClick={() => props.submit()}> Send </Button>
        {props.loading && <Loading />}
    </div>
)

const Loading = () => (
    <div style={{ fontSize: 20, marginTop: 20 }}>
        Sending...
    </div>
)

const RecieverDataInput = (props: any) => (
    <div className='data-input-container' style={{ backgroundColor: "#457b9d" }}>
        <p className='input-header'>Recievers list</p>
        {/* Recievers List */}
        <TextField
            name='recieversList'
            onChange={e => props.onTextChange(e)}
            value={props.mailSendData.recieversList}
            label='Recievers List'
            multiline
            minRows={4}
            maxRows={8}
        />
    </div>
)

const SenderDataInput = (props: any) => (
    <div className='data-input-container' style={{ backgroundColor: "#f1faee" }}>
        <p className='input-header'>Sender Info</p>
        {/* Sender email */}
        <TextField
            name='senderEmail'
            onChange={e => props.onTextChange(e)}
            value={props.mailSendData.senderEmail}
            label='Sender Email'
        />
        {/* Sender password */}
        <TextField
            name='senderPassword'
            onChange={e => props.onTextChange(e)}
            type="password"
            value={props.mailSendData.senderPassword}
            label='Sender Password'
        />
        {/* Sender email service */}
        <TextField
            name='senderService'
            onChange={e => props.onTextChange(e)}
            value={props.mailSendData.senderService}
            label='Sender Email Service'
        />
    </div>
)

const MessageDataInput = (props: any) => (
    <div className='data-input-container' style={{ backgroundColor: "#a8dadc" }}>
        <p className='input-header'>Message Info</p>
        {/* Message header */}
        <TextField
            name='messageHeader'
            onChange={e => props.onTextChange(e)}
            value={props.mailSendData.messageHeader}
            label='Message Header'
        />
        {/* Message text */}
        <TextField
            name='messageText'
            onChange={e => props.onTextChange(e)}
            value={props.mailSendData.messageText}
            label='Message Text'
            multiline
            minRows={4}
            maxRows={8}
        />
    </div>
)



export default FormView;