import React from 'react';
import T from 'prop-types';

const Controls = ({
  onClickNext,
  onClickPrev,
  prevBtnDisabled,
  nextBtnDisabled,
}) => {
  return (
    <section>
      <button disabled={prevBtnDisabled} onClick={onClickPrev} type="button">
        Назад
      </button>
      <button disabled={nextBtnDisabled} onClick={onClickNext} type="button">
        Вперед
      </button>
    </section>
  );
};

Controls.defaultProps = {
  prevBtnDisabled: false,
  nextBtnDisabled: false,
};

Controls.propTypes = {
  onClickNext: T.func.isRequired,
  onClickPrev: T.func.isRequired,
  prevBtnDisabled: T.bool,
  nextBtnDisabled: T.bool,
};

export default Controls;
