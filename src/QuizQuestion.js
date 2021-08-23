import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion  extends Component {
    render() {
        return(
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                {this.props.quiz_question.map((answer_options, index) => (
                    <QuizQuestionButton 
                        key = {index}
                        button_text = {this.props.quiz_question.answer_options[index]}
                    />
                ))}
                </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion