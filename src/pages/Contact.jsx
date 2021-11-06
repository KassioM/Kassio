import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0111pb3', 'template_ge5ntcq', form.current, 'user_Nc9x2ugr7cmvso459RA5Q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="contact" id="contato" >
            <div className="content-contact">

                <div className="title-contact">
                    <h1>Quer entrar em contato comigo?</h1>
                </div>

                <div className="content-input-contact">
                    <form className="input-contact" ref={form} onSubmit={sendEmail}>
                        <label>Nome</label>
                        <input type="text" onChange={e => setNome(e.target.value)} name="user" placeholder="ex: Elon Musk" required />
                        <label>Email</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} name="email" placeholder="ex: seuemail@gmail.com"  required/>
                        <label>Mensagem</label>
                        <textarea onChange={e => setMensagem(e.target.value)} required name="message" placeholder="ex: Gostei de você, você merece trabalhar em minha empresa, segunda vamos conversar melhor?" />
                        {nome === '' & email === '' & mensagem === '' ? <button className="button-input" type="button" >Enviar</button> : <button className="button-input" type="submit" >Enviar</button> }
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact
