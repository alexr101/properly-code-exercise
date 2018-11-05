import React, {Component} from 'react';
import FilterTab from './FilterTab/FilterTab';
import PropertyCardCollection from './PropertyCardCollection/PropertyCardCollection';
import './PropertyListing.css';

class PropertyListing extends Component {
    render(){
        return (
            <div>
                {/* <FilterTab></FilterTab> */}
                <PropertyCardCollection></PropertyCardCollection>
            </div>
        )
    }
}

export default PropertyListing;