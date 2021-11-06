import React from 'react';
import Box from './Box';

const Technologies = () => {
    return (
        <div className="technologies" id="tecnologias" >
            <div className="content-technologies">

                <Box
                    img="https://res.cloudinary.com/kassio-company/image/upload/v1635890082/Kassio%20Portif%C3%B3lio/Github.png"
                    width="210"
                    height="200"
                    title="Git Hub"
                    nivel="Sênior"
                    description="Milhões de desenvolvedores e empresas criam, enviam e mantêm seus softwares no GitHub - 
                    a maior e mais avançada plataforma de desenvolvimento do mundo.Como lar da maior comunidade de
                    desenvolvedores do mundo, acreditamos profundamente no potencial e no poder de uma comunidade
                    diversificada de código aberto."
                />

                <Box
                    img="https://res.cloudinary.com/kassio-company/image/upload/v1635890083/Kassio%20Portif%C3%B3lio/React.png"
                    width="300"
                    height="200"
                    title="React JS"
                    nivel="Júnior"
                    description="React faz com que a criação de UIs interativas seja uma tarefa fácil. 
                    Crie views simples para cada estado na sua aplicação, e o React irá 
                    atualizar e renderizar de forma eficiente apenas os componentes 
                    necessários na medida em que os dados mudam."
                />

                <Box
                    img="https://res.cloudinary.com/kassio-company/image/upload/v1635890083/Kassio%20Portif%C3%B3lio/NodeJs.png"
                    width="210"
                    height="200"
                    title="Node JS"
                    nivel="Iniciante"
                    description="O Node.js é semelhante em design e influenciado por sistemas como Ruby Event Machine e Python's Twisted .
                    O Node.js leva o modelo de evento um pouco mais longe. Ele apresenta um loop de eventos como uma construção de tempo
                    e execução em vez de uma biblioteca."
                />

<Box
                    img="https://res.cloudinary.com/kassio-company/image/upload/v1635890083/Kassio%20Portif%C3%B3lio/html.png"
                    width="200"
                    height="200"
                    title="HTML"
                    nivel="Sênior"
                    description="HTML (a linguagem de marcação de hipertexto) e CSS (folhas de estilo em cascata) são duas das principais 
                    tecnologias para a construção de páginas da web. HTML fornece a estrutura da página, CSS o (visual e auditiva)
                    layout, para uma variedade de dispositivos. Junto com gráficos e scripts , HTML e CSS são a base da construção
                    de páginas da Web e aplicativos da Web ."
                />

                <Box
                    img="https://res.cloudinary.com/kassio-company/image/upload/v1635890082/Kassio%20Portif%C3%B3lio/css.png"
                    width="210"
                    height="200"
                    title="CSS"
                    nivel="Sênior"
                    description="CSS é a linguagem para descrever a apresentação de páginas da Web, incluindo cores, layout e fontes. Permite adaptar
                    a apresentação a diferentes tipos de dispositivos, como telas grandes, telas pequenas ou impressoras. CSS é independente de HTML
                    e pode ser usado com qualquer linguagem de marcação baseada em XML."
                />



            </div>
        </div>
    )
}

export default Technologies;
