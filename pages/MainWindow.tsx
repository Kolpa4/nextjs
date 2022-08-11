import React from 'react'
import ButtonPortal from '../imports/ButtonPortal';
import RNDgenerator from '../imports/RNDgenerator';
import Square from '../imports/Square';

const MainWindow = () => {
    return (
        <div className="MainWindow">
            <Square />
            <Square />
            <Square />
            <ButtonPortal />
            <RNDgenerator />
    

        </div>
    )
}
export default MainWindow;