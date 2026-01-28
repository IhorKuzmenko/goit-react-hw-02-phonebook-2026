import { Component } from 'react';
import css from '../Section/Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={css.container}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;
