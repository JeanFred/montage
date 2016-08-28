import React from 'react'

const RoundClosing = React.createClass({
    getInitialState() {
        // Can't use the Immutable Map directly, since React requires
        // state to be a plain JS object
        return {
            closingCriteria: 0
        };
    },
    handleChange(event) {
        this.setState({closingCriteria: event.target.value});
    },
    renderCriteria() {
        let criteriaString;
        switch (this.props.type) {
            case 'bool':
                criteriaString = '% of Yes votes';
                break;
            case 'rating':
                criteriaString = 'Minimum mean rating';
                break;
            case 'ranking':
                criteriaString = 'Number of images to select';
                break;
            default:
                // This shouldn't happen!
                // FIXME: Throw a visible error here?
        }
        
        let previewDisabled = this.props.isCompleted ? 'true' : undefined;
        return <div className="form-group">
            <h3>Pick criteria!</h3>
            <label>{criteriaString}</label>
            <input 
                className="form-control"
                type="number"
                name="criteria"
                value={this.state.closingCriteria}
                onChange={this.handleChange} />
            <button className='btn btn-primary' disabled={previewDisabled}>Preview</button>
        </div>
    },
    renderPreview() {
        if (!this.props.isPreviewed) {
            return null;
        }
        return <div className='form-group'>
            <h3>Results for this criteria</h3>
            <p>{this.props.imagesCount} Images selected from {this.props.uploadersCount} different uploaders</p>
            <button className='btn btn-primary'>Mark as completed!</button>
        </div>
    },
    renderCompleted() {
        if (!this.props.isCompleted) {
            return null;
        }
        return <div className='form-group'>
            <div className="btn-group">
                <button className='btn btn-default'>Download winning images</button>
                <button className='btn btn-default'>Create new round</button>
                <button className='btn btn-default'>See votes</button>
            </div>
        </div>
    },
    render() {
        return <form className='col-sm-6 col-sm-offset-3'>
            {this.renderCriteria()}
            {this.renderPreview()}
            {this.renderCompleted()}
        </form>
    }
    
})

export default RoundClosing;
