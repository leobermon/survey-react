import '../styles/SuggestedQuestions2.css'

function SuggestedQuestions2() {

    const objects = ['hola', 'como', 'estas']
    const questions = [
        {
            pregunta: 'Prefieres powerade o gatora',
            respuestas: 1400,
            fecha: '12',
            mes: 'Mayo',
            autor: 'Leonel Bermon'
        },
        {
            pregunta: 'Prefieres Laptop o PC',
            respuestas: 4290,
            fecha: '01',
            mes: 'Junio',
            autor: 'Carlos Salinas'
        },
        {
            pregunta: 'Prefieres Android o Apple',
            respuestas: 43280,
            fecha: 23,
            mes: 'Enero',
            autor: 'Leonel Bermon'
        }
    ]

    return (
        <div className="SuggestedQuestions2 ">
            <div className="row">


                {questions.map(function (question, i) {
                    return <div className="col-4" key={i}>

                        <div className="card" id="card-card">
                            <div className='row'>
                                <div className='col-3' id='cardDate'>
                                    <p className='text-center'>{question.fecha}</p>
                                    <p className='text-center'>{question.mes}</p>
                                </div>
                                <div className='col-9'>
                                    <div className="card-body">
                                        <p id='cardName' className='text-start'> {question.autor} </p>
                                        <p id='cardQuestion' className='text-start'>{question.pregunta}</p> 
                                        <p id='respuestas' className='text-start'>{question.respuestas} Respuestas</p> 
                                        <p className='text-start'> <button type="button" className="btn btn-sm btn-outline-dark">Responder</button> </p>
                                         
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>;
                })}


            </div>
        </div>
    );
}

export default SuggestedQuestions2;
