import React, { Component } from 'react';
import Controls from './Controls';
import Progress from './Progress';
import Publication from './Publication';
import data from './data.json';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  onClickNext = () => {
    this.setState(prev => {
      return {
        publicationIndex: prev.publicationIndex + 1,
      };
    });
  };

  onClickPrev = () => {
    this.setState(prev => {
      return {
        publicationIndex: prev.publicationIndex - 1,
      };
    });
  };

  render () {
    const massiveLength = data.length;
    const { publicationIndex } = this.state;
    return (
      <div>
        <Controls
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
          prevBtnDisabled={publicationIndex === 0}
          nextBtnDisabled={publicationIndex + 1 === massiveLength}
        />
        <Progress
          massiveLength={massiveLength}
          publicationIndex={publicationIndex}
        />
        <Publication item={data[publicationIndex]} />
      </div>
    );
  }
}

export default Reader;
