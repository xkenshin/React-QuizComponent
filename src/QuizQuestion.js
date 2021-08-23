import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion  extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incorrectAnswer : false
        }
    }
    handleClick(button_text) {
        if(button_text === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler()
            this.setState((state) => {
                return {incorrectAnswer: false}
            })
        } else {
            this.setState((state) => {
                return {incorrectAnswer: true}
            })
        }
    }
    render() {
        return(
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                {this.props.quiz_question.answer_options.map((answer_option, index) => (
                    <QuizQuestionButton 
                        key = {index}
                        button_text = {answer_option}
                        clickHandler = {this.handleClick.bind(this)}
                    />
                ))}
                </ul>
                </section>
                {this.state.incorrectAnswer === true? <p className='error'>Sorry, that's not right</p>: <p></p>}
            </main>
        );
    }

}

export default QuizQuestion