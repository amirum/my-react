import React from 'react';
import {create} from 'react-test-render';

function Button(props){
    return <button>Nothing for now</button>
}

describe('Button component' , () => {
    test('Matches the snapshot', () => {
        const button = create (<Button />);
        expect(button.toJSON()).toMatchSnapshot();
        
    });

});
