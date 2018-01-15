import React from 'react';

/* functional alternative */
// const SearchBar = () => {
//     return <input onChange={event => console.log(event.target.value)} />;
// };
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        // binding this because react only autobinds react methods
        this.onInputChange = this.onInputChange.bind(this);
    }

    render() {                
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

    ////// alternate
    // render() {                
    //     return (
    //         <div className="search-bar">
    //             <input 
    //                 value={this.state.term}
    //                 onChange={this.onInputChange} />
    //         </div>
    //     );
    // }

    // onInputChange(event) {
    //     this.setState({ term: event.target.value });
    //     this.props.onSearchTermChange(event.target.value);
    // }
}

export default SearchBar;