import React, {useState} from 'react';


const About = () => {

    const [open, setOpen] = useState(0);

    console.log(open)

    return (
        <div className="about" id="sobre">

            <div className="box-about">

                <h1>Sobre mim</h1>
                
                <p>Meu nome é Kássio e eu sou desenvolvedor Front - End a mais de 3 anos, começei minha jornada desde cedo, atualmente eu tenho 13 anos, estudando e aprimorando meu conhencimento ao longo do tempo, o meu amor a essa área começou quando eu queria criar bots para pc, sendo ele para fazer alguma ação como: enviar mensagens automáticas no Whatsapp e etc, depois disso fui conhecendo liguagens novas e estudando suas funções, mas aí você me pergunta “ mas como você chegou nessa área da web?”, e eu respondo:  eu sempre acessava sites e me perguntava como era feito tudo aquilo, depois de um tempo começei a pesquisar cursos online e o primeiro que apareceu foi o curso de HTML e CSS do Gustavo Guanabara, depois de um tempo eu descobri a Rocketseat, que me levou ao próximo nível, do zero me tornei um profissional na área, e assim que começou a minha jornada.</p>

                <div className="redes-social-about">

                    <a href="https://www.linkedin.com/in/kassio-matheus-576943217/" target="_blank" >
                        <i class="fab fa-linkedin"></i>
                    </a>

                    <a href="mailto:kassiomatheus23@gmail.com?subject=Olá%20Kássio,%20vim%20pelo%20seu%20portfólio!" target="_blank" >
                        <i class="fas fa-envelope"></i>
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=5575997136619&text=Ol%C3%A1%20K%C3%A1ssio%2C%20vim%20pelo%20seu%20portf%C3%B3lio!" target="_blank" >
                        <i class="fab fa-whatsapp"></i>
                    </a>

                    <a href="https://t.me/KassioM" target="_blank" >
                        <i class="fab fa-telegram-plane"></i>
                    </a>

                </div>

            </div>

            <div className="duvidas-frequentes">

                <div className="content-box-duvidas">

                    <div className="content-boxs-duvidas" >

                        <div className="box-duvidas" onMouseEnter={() => setOpen(1)} onMouseLeave={() => setOpen(0)}>

                            <div className="content-titile-duvida">
                                <p>Quais linguagens você conhece ?</p>
                                <i class="fas fa-chevron-down"></i>
                            </div>

                            {open === 1
                                
                                ?
                                
                                <div className="content-about-duvida">
                                    <p>Atualmente eu conheço tecnologias como: React JS, React Native, HTML, CSS, Next JS, SASCCS, Git e Git Hub.</p>
                                </div>
                            
                                : null
                            }

                        </div>

                        <div className="box-duvidas" onMouseEnter={() => setOpen(2)} onMouseLeave={() => setOpen(0)} >

                            <div className="content-titile-duvida">
                                <p>Quais linguagens você pretende estudar ?</p>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                            
                            {open === 2
                                
                                ?
                                
                                <div className="content-about-duvida">
                                    <p>Eu pretendo estudar linguagens como: Angular, AWS, Nuxt JS, Vue JS, PHP, Laravel, MySQL, Node JS e Mongo DB.</p>
                                </div>
                            
                                : null
                            }

                        </div>

                        <div className="box-duvidas" onMouseEnter={() => setOpen(3)} onMouseLeave={() => setOpen(0)}  >

                            <div className="content-titile-duvida">
                                <p>Quais empresas você gostaria de participar ?</p>
                                <i class="fas fa-chevron-down"></i>
                            </div>

                            {open === 3
                                
                                ?
                                
                                <div className="content-about-duvida">
                                    <p>
                                        Meu sonho sempre foi em trabalhar em empresas grandes como a Google, Youtube, Netflix, Rocket Seat,
                                        Nubank, ou até mesmo em Startups pelo o mercado.
                                    </p>
                                </div>
                            
                                : null
                            }

                        </div>

                    </div>

                </div>

                <img src="https://res.cloudinary.com/kassio-company/image/upload/v1636311528/Kassio%20Portif%C3%B3lio/Back_vooaxl.jpg" alt="Background Dúvidas Frequentes" />

            </div>

        </div>
    )
}

export default About;
